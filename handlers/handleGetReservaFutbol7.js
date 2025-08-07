import moment from "moment-timezone";
import { ReservaFutbol } from "../models/reservaFutbol.js";

export const handleGetReservaFutbol7 = async (req, res) => {
    try {
        const { fecha } = req.query;

        console.log("fecha: ", fecha)

        if (!fecha) {
            return res.status(400).json({ error: "La fecha es requerida en el formato YYYY-MM-DD" });
        }

        const startOfDay = moment.tz(fecha, 'YYYY-MM-DD', 'America/Lima').startOf('day').toDate();
        const endOfDay = moment.tz(fecha, 'YYYY-MM-DD', 'America/Lima').endOf('day').toDate();

        console.log('🌅 startOfDay:', startOfDay.toISOString());
        console.log('🌇 endOfDay:', endOfDay.toISOString());

        const reservas1 = await ReservaFutbol.find({
            fecha: {
                $gte: startOfDay,
                $lte: endOfDay,
            },
            cancha: '1',
        });

        const reservas2 = await ReservaFutbol.find({
            fecha: {
                $gte: startOfDay,
                $lte: endOfDay,
            },
            cancha: '2',
        });

        const reservas3 = await ReservaFutbol.find({
            fecha: {
                $gte: startOfDay,
                $lte: endOfDay,
            },
            cancha: '3',
        });

        const reservas4 = await ReservaFutbol.find({
            fecha: {
                $gte: startOfDay,
                $lte: endOfDay,
            },
            cancha: '4',
        });
        res.status(201).json({
            message: "Reservas obtenidas desde la base de datos",
            data: [reservas1, reservas2, reservas3, reservas4],
            status: 201,
        });
    } catch (error) {
        console.error("❌ Error en getAllPropiedades:", error);
        return res.status(500).json({ message: `Error desconocido: ${error.message}` });
    }
};