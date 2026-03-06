import { Router } from 'express';
import { parseEncounterDate } from '../lib/parseEncounterDate';

export const debugRouter = Router();

debugRouter.get('/encounter-age-days', (req, res, next) => {
  try {
    const encounterDate = parseEncounterDate(req.query.date as string | undefined);
    const diffMs = Date.now() - encounterDate.getTime();

    const ageDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    if (Number.isNaN(ageDays)) {
      throw new Error('Encounter date is invalid');
    }

    res.json({ ageDays });
  } catch (error) {
    next(error);
  }
});
