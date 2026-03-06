// Contains a bug for the debugging exercise.
// It assumes date strings are always provided and valid.
export function parseEncounterDate(input?: string): Date {
  return new Date(input as string);
}
