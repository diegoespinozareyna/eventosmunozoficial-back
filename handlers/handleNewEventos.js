import Eventos from "../models/Eventos.js";

export const handleNewEventos = async (req, res) => {
    try {
        const body = await req.body;
        console.log("body: ", body)
        const { capacity, title, dateEvent, urlFlyer, proyecto, precioEntradaGeneral, precioEntradaPremium } = body;

        const nuevoEvento = {
            capacity: capacity,
            title: title,
            dateEvent: dateEvent,
            urlFlyer: urlFlyer,
            proyecto: proyecto,
            precioEntradaGeneral,
            precioEntradaPremium
        }

        const newEvento = await Eventos.create(nuevoEvento);

        return res.status(201).json({
            message: 'Evento creado exitosamente.',
            data: newEvento,
            status: 201,
        });
    } catch (error) {
        console.error('Error al crear evento:', error);
        return res.status(500).json({
            message: `'Error al crear evento:' ${error}`,
        });
    }
}