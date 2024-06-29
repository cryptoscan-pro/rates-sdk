import { describe, test } from 'bun:test';
import wait from 'wait';
import { listenTransactions } from './listenTransactions';

const TIMEOUT = 60 * 1_000;

describe('test listen transactions', () => {
  test('should get transaction', async () => {
    const pumpfunCoinAddress = 'CT6AWpRfyYpqiTSzBBjw9vpLAL73kf16sL89jvVipump';
    listenTransactions('solana', pumpfunCoinAddress, (transaction) => {
      console.log(transaction)
    })
    await wait(TIMEOUT);
  }, TIMEOUT)
})
