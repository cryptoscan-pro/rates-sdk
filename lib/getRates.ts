import { Rate } from "./types/Rate";

export const getRates = async (
	network: string,
	to: string, 
	from?: string, 
	amount?: number
): Promise<Rate[]> => {
	const params = new URLSearchParams()
	params.set('network', network);
	params.set('to', to);
	if (from) {
		params.set('from', from);
	}
	if (amount && (Number.isNaN(amount) || !Number.isFinite(amount))) {
		throw new Error('Amount must be a number')
	}
	if (amount) {
		params.set('amount', String(amount));
	}
	console.log('https://api.cryptoscan.pro/v1/rate?' + params.toString())
	const res = await fetch('https://api.cryptoscan.pro/v1/rate?' + params.toString());
	return res.json();
}
