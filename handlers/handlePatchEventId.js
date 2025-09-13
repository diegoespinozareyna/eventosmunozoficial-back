import Eventos from "../models/Eventos.js";

export const handlePatchEventId = async (req, res) => {
    try {
        const { id, proyecto } = req.query;
        console.log("id: ", id, proyecto)

        const { title, dateEvent, urlFlyer, capacity, precioEntradaGeneral, precioEntradaPremium, direccion, precioEntradaPlatinium, cantidadPremium, cantidadPlatinium } = req.body;

        const evento = await Eventos.findOneAndUpdate(
            { _id: id, proyecto: proyecto },
            { $set: { title, dateEvent, urlFlyer, capacity, precioEntradaGeneral, precioEntradaPremium, direccion, precioEntradaPlatinium, cantidadPremium, cantidadPlatinium } },
            { new: true } // Devuelve el documento actualizado
        );

        return res.status(200).json({
            message: `Evento ${id} actualizado exitosamente`,
            data: evento,
            status: 200,
        })

    } catch (error) {
        console.error("❌ Error en eventoId:", error);
        return res.status(500).json({ message: `Error desconocido: ${error.message}` });
    }
};