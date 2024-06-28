export const getRates = async (to: string, from?: string, amount?: number) => {
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
	getRates(to, from, amount).then(r => r[0])

export const getPrice = (to: string, from?: string, amount?: number) => 
	getRate(to, from, amount).then(r => r.price)
