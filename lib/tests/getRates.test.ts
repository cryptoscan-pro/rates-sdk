import { describe, expect, test } from 'vitest';
import { getRates } from '../index.js';

describe('get rates', () => {
	test('should get pumpfun rates by symbols', async () => {
		const network = 'solana';
		const service = 'pumpfun';
		const from = 'So11111111111111111111111111111111111111112';
		const to = 'HJAoYbnsf16Z8ftk3SsuShKLQQgzmxAPu41RTpjjpump';
		const rates = await getRates({
			service,
			network,
			from,
			to,
		})
		console.log(rates)
		expect(rates.length).toBeGreaterThan(0);
	}, 20_000)

	test('should get rates by symbols', async () => {
		const network = 'solana';
		const from = 'usdc';
		const to = 'sol';
		const rates = await getRates({
			network,
			symbol: to + from,
		})
		console.log(rates)
		expect(rates.length).toBeGreaterThan(0);
	}, 10_000)

	//test('should get rates by addresses', async () => {
	//	const network = 'solana';
	//	const from = 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v';
	//	const to = 'So11111111111111111111111111111111111111112';
	//	const rates = await getRates({
	//		network,
	//		from,
	//		to,
	//	})
	//	console.log(rates)
	//	expect(rates.length).toBeGreaterThan(0);
	//}, 10_000)
})
