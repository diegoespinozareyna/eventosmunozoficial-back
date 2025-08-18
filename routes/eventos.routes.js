import { Router } from 'express';
import { handleNewVoucherEventos } from '../handleEventos/handleNewVoucherEventos.js';
import { handleVouchersEventosPorAsiento } from '../handleEventos/handleVouchersEventosPorAsiento.js';
import { handleChangeStatusAsiento } from '../handleEventos/handleChangeStatusAsiento.js';
import { handleChangeStatusVoucherAsiento } from '../handleEventos/handleChangeStatusVoucherAsiento.js';

const router = Router();

router.post('/newVoucherEventos', handleNewVoucherEventos);
router.get('/vouchersEventosPorAsiento', handleVouchersEventosPorAsiento);
router.patch('/changeStatusAsiento', handleChangeStatusAsiento);
router.patch('/changeStatusVoucherAsiento', handleChangeStatusVoucherAsiento);

export default router;