import db1 from '../db/db.js';
import mongoose from 'mongoose';

const eventosSchema = new mongoose.Schema(
    {
        capacity: String,
        title: String,
        dateEvent: String,
        direccion: String,
        urlFlyer: String,
        proyecto: String,
        precioEntradaGeneral: String,
        precioEntradaPremium: String,
    },
    {
        timestamps: true,
        collection: 'eventos'
    },
);

const Eventos = db1.model('Eventos', eventosSchema);

export default Eventos;