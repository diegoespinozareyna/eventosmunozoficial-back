import Eventos from "../models/Eventos.js";

export const handleGetEventos = async (req, res) => {
    try {
        const eventos = await Eventos.find({}).exec();
        return res.status(201).json({
            message: "Eventos obtenidos desde la base de datos",
            data: eventos,
            status: 201,
        });
    } catch (error) {
        console.error("❌ Error en getAllPropiedades:", error);
        return res.status(500).json({ message: `Error desconocido: ${error.message}` });
    }
};