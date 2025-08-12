import db1 from '../db/db.js';
import mongoose from 'mongoose';

const configsReservaFutbolSchema = new mongoose.Schema(
    {
        precioDiaFutbol11: String,
        precioNocheFutbol11: String,
        precioDiaFutbol7: String,
        precioNocheFutbol7: String,
        proyecto: String,
    },
    {
        timestamps: true,
        collection: 'configsReservaFutbol'
    },
);

const ConfigsReservaFutbol = db1.model('ConfigsReservaFutbol', configsReservaFutbolSchema);

export default ConfigsReservaFutbol;