import { describe, it, expect } from 'vitest';
import { calculatePremium } from './quoteEngine';

describe('calculatePremium', () => {
  it('calculates basic premium correctly', () => {
    const result = calculatePremium(30, '100k', '0', 365, false);
    expect(result.dailyPremium).toBe('1.50');
    expect(result.totalPremium).toBe('547.50');
  });

  it('applies pre-existing condition multiplier', () => {
    const result = calculatePremium(30, '100k', '0', 365, true);
    expect(result.dailyPremium).toBe('2.10');
    expect(result.totalPremium).toBe('766.50');
  });
});
