import CompraAsiento from "../models/compraAsiento.js";

export const handleGetAsientosIdMatrix = async (req, res) => {
    try {
        const idMatrix = req.query.idMatrix;
        console.log("idMatrix: ", idMatrix)
        const query = { codMatrixTicket: idMatrix };
        console.log("query: ", query)
        const asientosIdMatrix = await CompraAsiento.find(query).exec();
        return res.status(200).json({
            message: "asientos obtenidos desde la base de datos",
            data: asientosIdMatrix,
            status: 200,
        });
    } catch (error) {
        console.error("❌ Error en obtener asientos:", error);
    }
}