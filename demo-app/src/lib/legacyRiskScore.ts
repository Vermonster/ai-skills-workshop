// Intentionally awkward legacy logic for refactoring exercise.
export function legacyRiskScore(age: number, smoker: boolean, systolicBP: number): string {
  let s = 0;

  if (age > 65) {
    s = s + 3;
  } else {
    if (age > 50) {
      s = s + 2;
    } else {
      if (age > 35) {
        s = s + 1;
      }
    }
  }

  if (smoker === true) {
    s = s + 2;
  }

  if (systolicBP >= 180) {
    s = s + 4;
  } else {
    if (systolicBP >= 160) {
      s = s + 3;
    } else {
      if (systolicBP >= 140) {
        s = s + 2;
      } else {
        if (systolicBP >= 120) {
          s = s + 1;
        }
      }
    }
  }

  if (s >= 7) {
    return 'high';
  }

  if (s >= 4) {
    return 'medium';
  }

  return 'low';
}
