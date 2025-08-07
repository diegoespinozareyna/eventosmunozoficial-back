import moment from "moment-timezone";
import { ReservaFutbol } from "../models/reservaFutbol.js";

export const handleReservaFutbol7 = async (req, res) => {
    try {
        const body = await req.body;

        console.log("body de reservaFutbol: ", body)

        const typeFutbol = body?.[0]?.cancha;
        const fecha = body?.[0]?.fecha;

        const startOfDay = moment.tz(fecha, 'YYYY-MM-DD', 'America/Lima').startOf('day').toDate();
        const endOfDay = moment.tz(fecha, 'YYYY-MM-DD', 'America/Lima').endOf('day').toDate();

        console.log('🌅 startOfDay:', startOfDay.toISOString());
        console.log('🌇 endOfDay:', endOfDay.toISOString());

        let result = []

        const reservas = await ReservaFutbol.find({
            fecha: {
                $gte: startOfDay,
                $lte: endOfDay,
            },
            cancha: "1"
        });

        const reservas2 = await ReservaFutbol.find({
            fecha: {
                $gte: startOfDay,
                $lte: endOfDay,
            },
            cancha: "2"
        });

        const reservas3 = await ReservaFutbol.find({
            fecha: {
                $gte: startOfDay,
                $lte: endOfDay,
            },
            cancha: "3"
        });

        const reservas4 = await ReservaFutbol.find({
            fecha: {
                $gte: startOfDay,
                $lte: endOfDay,
            },
            cancha: "4"
        });

        console.log("reservas: ", reservas)

        // if (typeFutbol === "1") {
        if (reservas.length > 0) {
            console.log("entre1")
            const reservasEditadas = await Promise.all(
                body?.filter(x => x.cancha == "1")?.map(async (reserva) => {
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
            // return res.status(201).json({
            //     message: "Reserva creada correctamente",
            //     data: reservasEditadas,
            //     status: 201,
            // });
            result.push(reservasEditadas)
        }
        else {
            console.log("entre2")
            const reservasCreadas = await Promise.all(
                body?.filter(x => x.cancha == "1")?.map(async (reserva) => {
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
            // return res.status(201).json({
            //     message: "Reserva creada correctamente",
            //     data: reservasCreadas,
            //     status: 201,
            // });
            result.push(reservasCreadas)
        }
        // }

        // if (typeFutbol === "2") {
        if (reservas2.length > 0) {
            console.log("entre2")
            const reservasEditadas2 = await Promise.all(
                body?.filter(x => x.cancha == "2")?.map(async (reserva) => {
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

                    const id = reservas2.find(x => x.horario === horario)?._id;
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
            // return res.status(201).json({
            //     message: "Reserva creada correctamente",
            //     data: reservasEditadas,
            //     status: 201,
            // });
            result.push(reservasEditadas2)
        }
        else {
            console.log("entre2")
            const reservasCreadas2 = await Promise.all(
                body?.filter(x => x.cancha == "2")?.map(async (reserva) => {
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
            // return res.status(201).json({
            //     message: "Reserva creada correctamente",
            //     data: reservasCreadas,
            //     status: 201,
            // });
            result.push(reservasCreadas2)
        }
        // }

        // if (typeFutbol === "3") {
        if (reservas3.length > 0) {
            console.log("entre3")
            const reservasEditadas3 = await Promise.all(
                body?.filter(x => x.cancha == "3")?.map(async (reserva) => {
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

                    const id = reservas3.find(x => x.horario === horario)?._id;
                    const canchaFutbol7 = reservas3.find(x => x.horario === horario)?.cancha;

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
            // return res.status(201).json({
            //     message: "Reserva creada correctamente",
            //     data: reservasEditadas,
            //     status: 201,
            // });
            result.push(reservasEditadas3)
        }
        else {
            console.log("entre33")
            const reservasCreadas3 = await Promise.all(
                body?.filter(x => x.cancha == "3")?.map(async (reserva) => {
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
            // return res.status(201).json({
            //     message: "Reserva creada correctamente",
            //     data: reservasCreadas,
            //     status: 201,
            // });
            result.push(reservasCreadas3)
        }
        // }

        // if (typeFutbol === "4") {
        if (reservas4.length > 0) {
            console.log("entre4")
            const reservasEditadas4 = await Promise.all(
                body?.filter(x => x.cancha == "4")?.map(async (reserva) => {
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

                    const id = reservas4.find(x => x.horario === horario)?._id;
                    const canchaFutbol7 = reservas4.find(x => x.horario === horario)?.cancha;

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
            // return res.status(201).json({
            //     message: "Reserva creada correctamente",
            //     data: reservasEditadas,
            //     status: 201,
            // });
            result.push(reservasEditadas4)
        }
        else {
            console.log("entre44")
            const reservasCreadas4 = await Promise.all(
                body?.filter(x => x.cancha == "4")?.map(async (reserva) => {
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
            // return res.status(201).json({
            //     message: "Reserva creada correctamente",
            //     data: reservasCreadas,
            //     status: 201,
            // });
            result.push(reservasCreadas4)
        }
        // }
        return res.status(201).json({
            message: "Reserva creada correctamente",
            data: result,
            status: 201,
        });

    } catch (error) {
        console.error("❌ Error en getAllPropiedades:", error);
        return res.status(500).json({ message: `Error desconocido: ${error.message}` });
    }
};