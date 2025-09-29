import db1 from '../db/db.js';
import mongoose from 'mongoose';

const encuestaSchema = new mongoose.Schema(
    {
        pregunta1: String,
        pregunta2: String,
        pregunta3: String,
        pregunta4: String,
        pregunta5: String,
        pregunta7: String,
        pregunta8: String,
        pregunta9: String,
        pregunta10: String,
        pregunta11: String,
        pregunta12: String,
        local: String,
    },
    {
        timestamps: true, // Agrega createdAt y updatedAt automáticamente
        collection: 'encuesta', // Especifica el nombre de la colección
    }
);

const EncuestaModel = db1.model('Encuesta', encuestaSchema);

export { EncuestaModel };