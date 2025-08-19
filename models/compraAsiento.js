import db1 from '../db/db.js';
import mongoose from 'mongoose';

const compraAsientoSchema = new mongoose.Schema(
    {
        status: String, // "0": pendiente, "1": aprobado, "2": rechazado, "3": anulado
        documentoUsuario: String,
        nombres: String,
        apellidoPaterno: String,
        apellidoMaterno: String,
        celular: String,
        codAsiento: String, // numero de asiento
        precio: String,
        codMatrixTicket: String, // codigo id de evento
        fileUrl: String,
        compraUserAntiguo: Boolean,
        proyecto: String,
        usuarioRegistro: String,
        patrocinadorId: String,
        fechaFin: Date,
        montoPasarela: String,
    },
    {
        timestamps: true,
        collection: 'compraAsiento'
    },
);

const CompraAsiento = db1.model('CompraAsiento', compraAsientoSchema);

export default CompraAsiento;                                                                      