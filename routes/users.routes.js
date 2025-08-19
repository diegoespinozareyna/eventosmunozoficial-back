import { Router } from 'express';
import { UsersModel } from '../models/users.js';
import { handleGetPatrocinadoresUnique } from '../handleUsers/handleGetPatrocinadoresUnique.js';

const router = Router();

router.get('/getUsersPatrocinadores', async (req, res) => {
    // res.json({ message: 'Ruta /api/users funcionando' });

    const patrocinadores = await UsersModel.find({ statusActive: "1" })
        .select("_id documentoUsuario nombres apellidoPaterno apellidoMaterno")
        .exec()

    return res.status(201).json({
        message: 'Ruta /api/users funcionando',
        data: patrocinadores,
        status: 201,
    });

});

router.get('/getPatrocinadoresUnique', handleGetPatrocinadoresUnique);

export default router;