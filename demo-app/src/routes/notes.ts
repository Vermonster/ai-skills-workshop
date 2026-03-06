import { Router } from 'express';
import { z } from 'zod';
import { addNote, getNoteById, listNotes } from '../store';
import { ClinicalNote } from '../types';

const createNoteSchema = z.object({
  patientId: z.string().min(1),
  author: z.string().min(1),
  text: z.string().min(1).max(2000)
});

export const notesRouter = Router();

notesRouter.post('/', (req, res) => {
  const parsed = createNoteSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      error: 'ValidationError',
      details: parsed.error.flatten()
    });
  }

  const note: ClinicalNote = {
    id: `note_${Date.now()}`,
    createdAt: new Date().toISOString(),
    ...parsed.data
  };

  addNote(note);
  return res.status(201).json(note);
});

notesRouter.get('/', (req, res) => {
  const patientId = req.query.patientId as string | undefined;
  return res.json(listNotes(patientId));
});

notesRouter.get('/:id', (req, res) => {
  const note = getNoteById(req.params.id);

  if (!note) {
    return res.status(404).json({
      error: 'NotFound',
      message: 'Note was not found'
    });
  }

  return res.json(note);
});
