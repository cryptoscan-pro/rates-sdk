import { describe, test } from 'vitest';
import wait from 'wait';
import { listenTransactions } from './listenTransactions';

const TIMEOUT = 60 * 1_000;

describe('test listen transactions', () => {
  test('should get transaction', async () => {
    const pumpfunCoinAddress = '5595C37tm21nr66Dro4BaYKZRpHz73mGxsYgLnL1pump';
    listenTransactions('solana', pumpfunCoinAddress, (transaction) => {
      console.log(transaction)
    })
    await wait(TIMEOUT);
  }, TIMEOUT)
})
