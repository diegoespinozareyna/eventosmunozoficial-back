import moment from "moment-timezone";
import { PagosReservaCanchaModel } from "../models/pagosReservaCancha.js";
import { ReservaFutbol } from "../models/reservaFutbol.js";

export const handleLiberarHorarios = async (req, res) => {
    try {
        const body = await req.body;

        let result = []

        console.log("body de liberarHorarios: ", body)

        const { horarios } = body;

        console.log("horarios: ", horarios)

        console.log("fecha: ", horarios?.fecha)

        if (!horarios?.fecha) {
            return res.status(400).json({ error: "La fecha es requerida en el formato YYYY-MM-DD" });
        }

        const startOfDay = moment.tz(horarios?.fecha, 'YYYY-MM-DD', 'America/Lima').startOf('day').toDate();
        const endOfDay = moment.tz(horarios?.fecha, 'YYYY-MM-DD', 'America/Lima').endOf('day').toDate();

        if (horarios?.cancha0 !== "" && horarios?.cancha0 !== null && horarios?.cancha0 !== undefined) {
            const liberarCancha0 = horarios?.cancha0?.split(", ")
            console.log("liberarCancha0: ", liberarCancha0)
            const liberarCancha0All = await Promise.all(
                liberarCancha0?.map(async (horario) => {
                    return await ReservaFutbol.findOneAndUpdate(
                        {
                            fecha: {
                                $gte: startOfDay,
                                $lte: endOfDay,
                            },
                            cancha: "0",
                            horario: horario
                        },
                        {
                            $set: { status: "0" }
                        },
                        { new: true }
                    );
                })
            );
            result.push(liberarCancha0All)
        }
        if (horarios?.cancha1 !== "" && horarios?.cancha1 !== null && horarios?.cancha1 !== undefined) {
            const liberarCancha1 = horarios?.cancha1?.split(", ")
            console.log("liberarCancha0: ", liberarCancha1)
            const liberarCancha1All = await Promise.all(
                liberarCancha1?.map(async (horario) => {
                    return await ReservaFutbol.findOneAndUpdate(
                        {
                            fecha: {
                                $gte: startOfDay,
                                $lte: endOfDay,
                            },
                            cancha: "1",
                            horario: horario
                        },
                        {
                            $set: { status: "0" }
                        },
                        { new: true }
                    );
                })
            );
            result.push(liberarCancha1All)
        }
        if (horarios?.cancha2 !== "" && horarios?.cancha2 !== null && horarios?.cancha2 !== undefined) {
            const liberarCancha2 = horarios?.cancha2?.split(", ")
            console.log("liberarCancha0: ", liberarCancha2)
            const liberarCancha2All = await Promise.all(
                liberarCancha2?.map(async (horario) => {
                    return await ReservaFutbol.findOneAndUpdate(
                        {
                            fecha: {
                                $gte: startOfDay,
                                $lte: endOfDay,
                            },
                            cancha: "2",
                            horario: horario
                        },
                        {
                            $set: { status: "0" }
                        },
                        { new: true }
                    );
                })
            );
            result.push(liberarCancha2All)
        }
        if (horarios?.cancha3 !== "" && horarios?.cancha3 !== null && horarios?.cancha3 !== undefined) {
            const liberarCancha3 = horarios?.cancha3?.split(", ")
            console.log("liberarCancha0: ", liberarCancha3)
            const liberarCancha3All = await Promise.all(
                liberarCancha3?.map(async (horario) => {
                    return await ReservaFutbol.findOneAndUpdate(
                        {
                            fecha: {
                                $gte: startOfDay,
                                $lte: endOfDay,
                            },
                            cancha: "3",
                            horario: horario
                        },
                        {
                            $set: { status: "0" }
                        },
                        { new: true }
                    );
                })
            );
            result.push(liberarCancha3All)
        }
        if (horarios?.cancha4 !== "" && horarios?.cancha4 !== null && horarios?.cancha4 !== undefined) {
            const liberarCancha4 = horarios?.cancha4?.split(", ")
            console.log("liberarCancha0: ", liberarCancha4)
            const liberarCancha4All = await Promise.all(
                liberarCancha4?.map(async (horario) => {
                    return await ReservaFutbol.findOneAndUpdate(
                        {
                            fecha: {
                                $gte: startOfDay,
                                $lte: endOfDay,
                            },
                            cancha: "4",
                            horario: horario
                        },
                        {
                            $set: { status: "0" }
                        },
                        { new: true }
                    );
                })
            );
            result.push(liberarCancha4All)
        }

        return res.status(201).json({
            message: 'horarios actualizados exitosamente.',
            data: result,
            status: 201,
        });
    } catch (error) {
        console.error("❌ Error en getAllPropiedades:", error);
        return res.status(500).json({ message: `Error desWconocido: ${error.message}` });
    }
};