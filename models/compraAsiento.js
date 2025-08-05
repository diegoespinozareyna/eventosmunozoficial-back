import db1 from '../db/db.js';
import mongoose from 'mongoose';

const compraAsientoSchema = new mongoose.Schema(
    {
        status: String, // "0": disponible, "1": comprado
        documentoUsuario: String,
        nombres: String,
        apellidoPaterno: String,
        apellidoMaterno: String,
        codAsiento: String,
        precio: String,
        codMatrixTicket: String,
        fileUrl: String,
        compraUserAntiguo: Boolean,
        proyecto: String,
        usuarioRegistro: String,
    },
    {
        timestamps: true,
        collection: 'compraAsiento'
    },
);
                                              
const CompraAsiento = db1.model('CompraAsiento', compraAsientoSchema);

export default CompraAsiento;                                                                      