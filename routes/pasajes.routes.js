import { Router } from 'express';
import { handleNewPasajesAll } from '../handlePasajes/handleNewPasajesAll.js';
import { handleGetPasajesAll } from '../handlePasajes/handleGetPasajesAll.js';
import { handleGetPasajesId } from '../handlePasajes/handleGetPasajesId.js';
import { handlePatchPasajestId } from '../handlePasajes/handlePatchPasajestId.js';
import { handleGetAsientosIdMatrix } from '../handlePasajes/handleGetAsientosIdMatrix.js';
import { handleComprarAsientoAll } from '../handlePasajes/handleComprarAsientoAll.js';
import { handleEditAsientoAll } from '../handlePasajes/handleEditAsientoAll.js';

const router = Router();

// pasajes
router.get('/getPasajesAll', handleGetPasajesAll);
router.post('/newPasajesAll', handleNewPasajesAll);
router.get('/getPasajesId', handleGetPasajesId);
router.patch('/patchPasajestId', handlePatchPasajestId);

// asientos
router.get('/getAsientosIdMatrix', handleGetAsientosIdMatrix);
router.post('/compraAsientoAll', handleComprarAsientoAll);
router.patch('/editAsientoAll', handleEditAsientoAll);

export default router;