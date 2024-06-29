import { Route } from "next";

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
