import { Rate } from "./types/Rate";

export const getRates = async (to: string, from?: string, amount?: number): Promise<Rate[] | Error> => {
	const params = new URLSearchParams()
	params.set('to', to);
	if (from) {
		params.set('from', from);
	}
	if (Number.isNaN(amount) || !Number.isFinite(amount)) {
		return new Error('Amount must be a number')
	}
	if (amount) {
		params.set('amount', String(amount));
	}
	const res = await fetch('https://api.cryptoscan.pro/v1/rate?' + params.toString());
	return res.json();
}
