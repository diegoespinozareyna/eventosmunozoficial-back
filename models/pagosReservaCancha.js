import db1 from '../db/db.js';
import mongoose from 'mongoose';

const pagosReservaCanchaSchema = new mongoose.Schema(
    {
        codPedido: String,
        nOperacion: String,
        documentoUsuario: String,
        fechaPago: Date,
        formaPago: String,
        monto: String,
        fechaVerificacion: String,
        estadoVerificacion: String,
        conceptoPago: String,
        status: String, // "0" eliminado, "1" vigente
        observaciones: String,
        proyecto: String,
        url: String,
    },
    {
        timestamps: true, // Agrega createdAt y updatedAt automáticamente
        collection: 'pagosReservaCancha', // Especifica el nombre de la colección
    }
);

const PagosReservaCanchaModel = db1.model('PagosReservaCancha', pagosReservaCanchaSchema);

export { PagosReservaCanchaModel };