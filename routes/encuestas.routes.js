import { Router } from 'express';
import { handleNewEncuesta } from '../handleEncuestas/handleNewEncuesta.js';
import { handleEncuestas } from '../handleEncuestas/handleEncuestas.js';

const router = Router();

router.post('/newEncuesta', handleNewEncuesta);
router.get('/getEncuestas', handleEncuestas);

export default router;