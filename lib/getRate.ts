import { getRates } from "./getRates";

export const getRate = (to: string, from?: string, amount?: number) => 
	getRates(to, from, amount).then(r => Array.isArray(r) ? r[0] : r)
