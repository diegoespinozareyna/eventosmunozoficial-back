import { Router } from 'express';
import { handleNewPasajesAll } from '../handlePasajes/handleNewPasajesAll.js';
import { handleGetPasajesAll } from '../handlePasajes/handleGetPasajesAll.js';
import { handleGetPasajesId } from '../handlePasajes/handleGetPasajesId.js';
import { handlePatchPasajestId } from '../handlePasajes/handlePatchPasajestId.js';
import { handleGetAsientosIdMatrix } from '../handlePasajes/handleGetAsientosIdMatrix.js';

const router = Router();

router.get('/getPasajesAll', handleGetPasajesAll);
router.post('/newPasajesAll', handleNewPasajesAll);
router.get('/getPasajesId', handleGetPasajesId);
router.patch('/patchPasajestId', handlePatchPasajestId);
router.get('/getAsientosIdMatrix', handleGetAsientosIdMatrix);

export default router;