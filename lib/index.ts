import WebSocket from 'ws';
import { Transaction } from './types/Transaction.js';
import { Rate } from "./types/Rate.js";

export interface GetRateParams {
	network: string;
	service?: string;
	to: string;
	from?: string;
	amount?: number;
}

export const getRates = async (options: GetRateParams, key = 'dex-rates'): Promise<Rate[]> => {
	const params = new URLSearchParams(options as unknown as Record<string, string>);
	const res = await fetch(`https://api.cryptoscan.pro/${key}?${params}`);
	const data = await res.json();
	if (!data.quota) {
		throw new Error(data.error);
	}
	return data.data;
}

export const getRate = (params: GetRateParams): Promise<Rate | undefined> =>
	getRates(params).then(r => Array.isArray(r) ? r[0] : r)

export const getPrice = (params: GetRateParams): Promise<number | undefined> =>
	getRate(params).then(r => r?.price)

export const listenTransactions = (
	params: Omit<GetRateParams, 'amount'>,
	onTransaction: (transaction: Transaction) => void,
): () => void => {
	const ws = new WebSocket('wss://api.cryptoscan.pro/transactions?' + new URLSearchParams(params));

	ws.on('open', () => {
		ws.send(JSON.stringify(params));
	})

	ws.on('message', (msg) => {
		const data = JSON.parse(msg.toString());
		onTransaction({
			...data,
			createdAt: new Date(data.createdDate),
		})
	})

	return () => {
		ws.close();
	}
}

export * from './types/index.js';
