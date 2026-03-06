import { legacyRiskScore } from '../src/lib/legacyRiskScore';

describe('legacyRiskScore baseline behavior', () => {
  it('returns low risk for younger non-smoker with lower BP', () => {
    expect(legacyRiskScore(30, false, 110)).toBe('low');
  });

  it('returns medium risk for moderate risk profile', () => {
    expect(legacyRiskScore(55, false, 145)).toBe('medium');
  });

  it('returns high risk for older smoker with very high BP', () => {
    expect(legacyRiskScore(70, true, 185)).toBe('high');
  });
});
