import db1 from '../db/db.js';
import mongoose from 'mongoose';

const pagoAsientoEventoSchema = new mongoose.Schema(
    {
        //id reconocimiento
        codEvento: String,
        idTicketAsiento: String,
        nOperacion: String,
        codAsiento: String,
        //datos pago
        conceptoPago: String,
        fechaPago: String,
        formaPago: String,
        monto: String,
        documentoUsuario: String,
        comentario: String,
        proyecto: String,
        url: String,
        // status
        status: String, // "0" pendiente, "1" aprobado, "2" rechazado, "3" anulado
        fechaVerificacion: String,
        usuarioVerificacion: String,
    },
    {
        timestamps: true, // Agrega createdAt y updatedAt automáticamente
        collection: 'pagoAsientoEvento', // Especifica el nombre de la colección
    }
);

const PagoAsientoEventoModel = db1.model('PagoAsientoEvento', pagoAsientoEventoSchema);

export { PagoAsientoEventoModel };