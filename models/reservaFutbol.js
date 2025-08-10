import db1 from '../db/db.js';
import mongoose from 'mongoose';

const reservaFutbolSchema = new mongoose.Schema(
    {
        fecha: Date,
        cancha: String, // "0": futbol11, "1": cancha1, "2": cancha2, "3": cancha3, "4": cancha4
        status: String, // "0": libre, "1": seleccionado, "2": ocupado
        horario: String,
        precio: String,
        documentoUsuario: String,
        nombres: String,
        apellidoPaterno: String,
        apellidoMaterno: String,
        urlPago: String,
    },
    {
        timestamps: true,
        collection: 'reservaFutbol'
    },
);

const ReservaFutbol = db1.model('reservaFutbol', reservaFutbolSchema);

export { ReservaFutbol };