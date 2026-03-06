import { ClinicalNote } from './types';

const notes: ClinicalNote[] = [];

export function addNote(note: ClinicalNote): ClinicalNote {
  notes.push(note);
  return note;
}

export function getNoteById(id: string): ClinicalNote | undefined {
  return notes.find((note) => note.id === id);
}

export function listNotes(patientId?: string): ClinicalNote[] {
  if (!patientId) {
    return notes;
  }

  return notes.filter((note) => note.patientId === patientId);
}

export function clearNotes(): void {
  notes.length = 0;
}
