import moment from "moment-timezone";
import { ReservaPersonaFutbol } from "../models/reservaPersonaFutbol.js";

export const handleReservaPersonaFutbol = async (req, res) => {
    try {
        const body = await req.body;

        console.log("body de reservaPersonaFutbol: ", body)

        const reservaPersona = await ReservaPersonaFutbol.create(body);

        return res.status(201).json({
            message: "Reserva creada correctamente",
            data: reservaPersona,
            status: 201,
        });

    } catch (error) {
        console.error("❌ Error en getAllPropiedades:", error);
        return res.status(500).json({ message: `Error desconocido: ${error.message}` });
    }
};