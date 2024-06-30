import WebSocket from 'ws';
import { Transaction } from './types/Transaction';

export const listenTransactions = (
	network: string,
	fromAddress: string,
	onTransaction: (transaction: Transaction) => void,
	toAddress?: string,
) => {
	const ws = new WebSocket('wss://api.cryptoscan.pro/v1/transactions');

	ws.on('open', () => {
		console.log('Started listening transactions on ', fromAddress)
		ws.send(JSON.stringify({ 
			address: fromAddress,
			network,
		}));
	})

	ws.on('message', (msg) => {
		const data = JSON.parse(msg.toString());
		onTransaction({
			...data,
			createdDate: new Date(data.createdDate),
		})
	})
}
