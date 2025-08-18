import CompraAsiento from "../models/compraAsiento.js";

export const handleChangeStatusAsiento = async (req, res) => {
    try {
        const body = await req.body;

        const { id, status, comentario } = body;

        console.log("body de changeStatusAsiento: ", body)

        const updatedAsiento = await CompraAsiento.findOneAndUpdate(
            { _id: id },
            { $set: { status, comentario } },
            { new: true }
        );

        // Si no se encontró el voucher
        if (!updatedAsiento) {
            return res.status(402).json({
                message: "Lo Sentimos",
                messageLarge: "Voucher no existe o ha sido borrado de la base de datos",
            });
        }

        // Respuesta exitosa
        return res.status(201).json({
            message: "Status actualizado correctamente",
            pagoAsientoEvento: updatedAsiento,
            status: 201,
        });
    } catch (error) {
        // Manejo de errores
        console.error(error);
        return res.status(500).json({
            message: "Ocurrió un error al actualizar el status",
        });
    }
};