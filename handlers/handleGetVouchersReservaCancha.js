import moment from "moment-timezone";
import { PagosModel } from "../models/pagos.js";
import { PagosReservaCanchaModel } from "../models/pagosReservaCancha.js";

export const handleGetVouchersReservaCancha = async (req, res) => {
    try {
        const params = req.query;
        const nOperacion = params?.nOperacion

        console.log("nOperacion: ", nOperacion)

        const pagos = await PagosReservaCanchaModel.find({
            nOperacion
        }).exec();

        if (!pagos || pagos.length === 0) {
            return res.status(202).json({
                message: "No se encontraron pagos para el pedido especificado",
                data: [],
                status: 202,
            });
        }

        return res.status(200).json({
            message: "Propiedades obtenidas desde la base de datos",
            data: pagos,
            status: 200,
        });
    } catch (error) {
        console.error("❌ Error en getAllPropiedades:", error);
        return res.status(500).json({ message: `Error desconocido: ${error.message}` });
    }
}