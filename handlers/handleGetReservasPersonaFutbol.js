import moment from "moment-timezone";
import { ReservaPersonaFutbol } from "../models/reservaPersonaFutbol.js";

export const handleGetReservasPersonaFutbol = async (req, res) => {
    try {
        const { fechaInicio, fechaFin, documentoUsuario, status } = req.query;

        console.log("fechaInicio: ", fechaInicio)
        console.log("fechaFin: ", fechaFin)
        console.log("documentoUsuario: ", documentoUsuario)
        console.log("status: ", status)

        const startOfDay = moment.tz(fechaInicio, 'YYYY-MM-DD', 'America/Lima').startOf('day');
        const endOfDay = moment.tz(fechaFin, 'YYYY-MM-DD', 'America/Lima').startOf('day');

        console.log('🌅 startOfDay:', startOfDay.toISOString());
        console.log('🌇 endOfDay:', endOfDay.toISOString());

        const reservas = await ReservaPersonaFutbol.find({
            fecha: {
                $gte: startOfDay,
                $lte: endOfDay,
            },
        });
        res.status(201).json({
            message: "Reservas obtenidas desde la base de datos",
            data: reservas,
            status: 201,
        });
    } catch (error) {
        console.error("❌ Error en getAllPropiedades:", error);
        return res.status(500).json({ message: `Error desconocido: ${error.message}` });
    }
};