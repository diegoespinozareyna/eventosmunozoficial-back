import Eventos from "../models/Eventos.js";

export const handleGetEventId = async (req, res) => {
    try {
        const { id, proyecto } = req.query;
        console.log("id: ", id, proyecto)

        const evento = await Eventos.findOne({ _id: id, proyecto: proyecto }).exec();
        return res.status(200).json({
            message: `Evento ${id} obtenido desde la base de datos`,
            data: evento,
            status: 200,
        })

    } catch (error) {
        console.error("❌ Error en eventoId:", error);
        return res.status(500).json({ message: `Error desconocido: ${error.message}` });
    }
};