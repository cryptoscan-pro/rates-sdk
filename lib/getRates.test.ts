import { describe, expect, test } from 'vitest';
import { getRates } from './getRates';

describe('get rates', () => {
	test('should get rates by symbols', async () => {
		const network = 'solana';
		const from = 'USDC';
		const to = 'SOL';
		const rates = await getRates(
			network,
			from,
			to,
		)
		expect(rates.length).toBeGreaterThan(0);
	})
	test('should get rates by addresses', async () => {
		const network = 'solana';
		const from = 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v';
		const to = 'So11111111111111111111111111111111111111112';
		const rates = await getRates(
			network,
			from,
			to,
		)
		expect(rates.length).toBeGreaterThan(0);
	})
})
