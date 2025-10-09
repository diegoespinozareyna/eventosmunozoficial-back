import CompraAsiento from "../models/compraAsiento.js";

export const handleEditAsientoAll = async (req, res) => {
    try {
        const body = req.body;
        console.log(body);
        const visitaNew = await CompraAsiento.findOneAndUpdate({ _id: body.id }, {
            $set: {
                status: body?.status,
                documentoUsuario: body?.documentoUsuario,
                nombres: body?.nombres,
                apellidoPaterno: body?.apellidoPaterno,
                apellidoMaterno: body?.apellidoMaterno,
                celular: body?.celular,
                email: body?.email,
            },
            new: true,
        });
        return res.status(201).json({
            message: "Visita actualizada con éxito",
            data: visitaNew,
            status: 201,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Pasajes obtenidos desde la base de datos",
            data: "no encontrados",
            status: 500,
        });
    }
}