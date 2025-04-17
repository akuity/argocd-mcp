import { pino } from 'pino';
import { stderr } from 'process';

export const logger = pino(pino.destination(stderr));
