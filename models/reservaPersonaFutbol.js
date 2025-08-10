import db1 from '../db/db.js';
import mongoose from 'mongoose';

const reservaPersonaFutbolSchema = new mongoose.Schema(
    {
        fecha: Date,
        status: String, // "0": pendiente, "1": aprobado, "2": rechazado
        cancha0: String,
        cancha1: String,
        cancha2: String,
        cancha3: String,
        cancha4: String,
        precio: String,
        documentoUsuario: String,
        nombres: String,
        apellidoPaterno: String,
        apellidoMaterno: String,
        urlPago: String,
        comentario: String,
        nOperacion: String,
    },
    {
        timestamps: true,
        collection: 'reservaPersonaFutbol'
    },
);

const ReservaPersonaFutbol = db1.model('reservaPersonaFutbol', reservaPersonaFutbolSchema);

export { ReservaPersonaFutbol };