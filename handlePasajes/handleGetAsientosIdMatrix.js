import CompraAsiento from "../models/compraAsiento.js";

export const handleGetAsientosIdMatrix = async (req, res) => {
    try {
        const { idMatrix } = req.query;
        console.log("el id es", idMatrix);
        const visitaId = await CompraAsiento.find({ codMatrixTicket: idMatrix });
        console.log("el id esww", visitaId);
        return res.status(201).json({
            message: "Asientos obtenidos desde la base de datos",
            data: visitaId,
            status: 201,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Asientos no obtenidos desde la base de datos",
            data: "no encontrados",
            status: 500,
        });
    }
}