import moment from "moment-timezone";
import { ReservaFutbol } from "../models/reservaFutbol.js";

export const handleReservaFutbol = async (req, res) => {
    try {
        const body = await req.body;

        console.log("body de reservaFutbol: ", body)

        const typeFutbol = body?.[0]?.cancha;
        const fecha = body?.[0]?.fecha;

        const startOfDay = moment.tz(fecha, 'YYYY-MM-DD', 'America/Lima').startOf('day').toDate();
        const endOfDay = moment.tz(fecha, 'YYYY-MM-DD', 'America/Lima').endOf('day').toDate();

        console.log('🌅 startOfDay:', startOfDay.toISOString());
        console.log('🌇 endOfDay:', endOfDay.toISOString());

        const reservas = await ReservaFutbol.find({
            fecha: {
                $gte: startOfDay,
                $lte: endOfDay,
            },
            cancha: "0"
        });

        console.log("reservas: ", reservas)

        // if (typeFutbol === "0") {
        if (reservas.length > 0) {
            console.log("entre1")
            const reservasEditadas = await Promise.all(
                body?.map(async (reserva) => {
                    const {
                        fecha,
                        cancha,
                        status,
                        horario,
                        precio,
                        documentoUsuario,
                        nombres,
                        apellidoPaterno,
                        apellidoMaterno,
                    } = reserva;

                    const id = reservas.find(x => x.horario === horario)?._id;
                    const canchaFutbol7 = reservas.find(x => x.horario === horario)?.cancha;

                    return await ReservaFutbol.findByIdAndUpdate(
                        id,
                        {
                            $set: {
                                status,
                                horario,
                                precio,
                                documentoUsuario,
                                nombres,
                                apellidoPaterno,
                                apellidoMaterno
                            }
                        },
                        { new: true } // Devuelve el documento actualizado
                    );
                })
            );
            return res.status(201).json({
                message: "Reserva creada correctamente",
                data: reservasEditadas,
                status: 201,
            });
        }
        else {
            console.log("entre2")
            const reservasCreadas = await Promise.all(
                body?.map(async (reserva) => {
                    const {
                        fecha,
                        cancha,
                        status,
                        horario,
                        precio,
                        documentoUsuario,
                        nombres,
                        apellidoPaterno,
                        apellidoMaterno
                    } = reserva;

                    return await ReservaFutbol.create({
                        fecha,
                        cancha,
                        status,
                        horario,
                        precio,
                        documentoUsuario,
                        nombres,
                        apellidoPaterno,
                        apellidoMaterno,
                    });
                })
            );
            return res.status(201).json({
                message: "Reserva creada correctamente",
                data: reservasCreadas,
                status: 201,
            });
        }
        // }


    } catch (error) {
        console.error("❌ Error en getAllPropiedades:", error);
        return res.status(500).json({ message: `Error desconocido: ${error.message}` });
    }
};