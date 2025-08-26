import CompraAsiento from "../models/compraAsiento.js";

export const handleEditarAsiento = async (req, res) => {
    try {
        const body = await req.body;

        const { id, nombres, apellidoPaterno, apellidoMaterno, celular, documentoUsuario, patrocinadorId, compraUserAntiguo } = body;

        console.log("body de editarAsiento: ", body)

        const patchAsiento = await CompraAsiento.findOneAndUpdate(
            { _id: id },
            { $set: { nombres, apellidoPaterno, apellidoMaterno, celular, documentoUsuario, patrocinadorId, compraUserAntiguo } },
            { new: true }
        );

        // Si no se encontró el voucher
        if (!patchAsiento) {
            return res.status(402).json({
                message: "Lo Sentimos",
                messageLarge: "Voucher no existe o ha sido borrado de la base de datos",
            });
        }

        return res.status(201).json({
            message: 'Estos son los del nuevo asiento comprado',
            data: patchAsiento,
            status: 201,
        });
    } catch (error) {
        console.error("❌ Error en getAllPropiedades:", error);
        return res.status(500).json({ message: `Error desconocido: ${error.message}` });
    }
};