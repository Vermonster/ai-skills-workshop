import { calculateBMI } from '../src/lib/calculateBMI';

describe('calculateBMI', () => {
  it('returns a BMI for typical values', () => {
    expect(calculateBMI(70, 1.75)).toBeCloseTo(22.86, 2);
  });

  // Intentionally incomplete for exercise 1.
  // Participants should add edge/negative case coverage.
});
