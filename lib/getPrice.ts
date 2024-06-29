import { getRate } from "./getRate";

export const getPrice = (to: string, from?: string, amount?: number) => 
	getRate(to, from, amount).then(r => r instanceof Error ? r : r.price)
