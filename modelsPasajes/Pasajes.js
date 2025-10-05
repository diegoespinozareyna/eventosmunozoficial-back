import db1 from '../db/db.js';
import mongoose from 'mongoose';

const pasajesSchema = new mongoose.Schema(
    {
        titulo: String,
        fechaVisita: String,
        destino: String, // paracas, vallehermoso, etc
        precioAsiento: String,
    },
    {
        timestamps: true,
        collection: 'pasajes'
    },
);

const Pasajes = db1.model('Pasajes', pasajesSchema);

export default Pasajes;