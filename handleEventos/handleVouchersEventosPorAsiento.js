import { PagoAsientoEventoModel } from "../modelsEventos/pagoAsientoEvento.js";

export const handleVouchersEventosPorAsiento = async (req, res) => {
    try {
        const { codAsiento, proyecto, id, idIcketAsiento } = req.query;

        console.log("codAsiento: ", req.query)

        if (!codAsiento) {
            return res.status(400).json({
                message: "El código de asiento es requerido",
            });
        }

        const vouchers = await PagoAsientoEventoModel.find({
            idTicketAsiento: idIcketAsiento,
            // codAsiento: codAsiento, // A01
            // codEvento: id,
            // proyecto,
        });

        if (vouchers.length === 0) {
            return res.status(404).json({
                message: "No se encontraron vouchers para el código de asiento proporcionado",
            });
        }

        return res.status(201).json({
            message: "Vouchers encontrados exitosamente",
            data: vouchers,
            status: 201,
        });
    } catch (error) {
        console.error('Error al obtener vouchers por asiento:', error);
        return res.status(500).json({
            message: `Error al obtener vouchers por asiento: ${error.message}`,
        });
    }
}