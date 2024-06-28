export interface Route {
	service: string;
	percentage: number;
	price: number;
	priceUSD: number;
}

export interface Rate {
	contractFrom: string;
	contractTo: string;
	base: string;
	quote: string;
	poolAddress?: string;
	price: number;
	priceUSD: number;
	result: number;
	resultUSD: number;
	fee: number;
	feeUSD: number;
	service: string;
	impact: number;
	routes: Route[];
}

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

export const getRate = (to: string, from?: string, amount?: number) => 
	getRates(to, from, amount).then(r => Array.isArray(r) ? r[0] : r)

export const getPrice = (to: string, from?: string, amount?: number) => 
	getRate(to, from, amount).then(r => r instanceof Error ? r : r.price)
