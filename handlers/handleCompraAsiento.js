import CompraAsiento from "../models/compraAsiento.js";

export const handleCompraAsiento = async (req, res) => {
    try {
        const body = await req.body;

        // const { documentoUsuario, nombres, apellidoPaterno, apellidoMaterno, codAsiento, precio, codMatrixTicket } = body;

        // console.log("body de compraAsiento: ", body)

        // const nuevoAsiento = {
        //     documentoUsuario: documentoUsuario,
        //     nombres: nombres,
        //     apellidoPaterno: apellidoPaterno,
        //     apellidoMaterno: apellidoMaterno,
        //     codAsiento: codAsiento,
        //     precio: precio,
        //     codMatrixTicket: codMatrixTicket,
        // };
        const newAsiento = await CompraAsiento.create(body);

        return res.status(201).json({
            message: 'Estos son los del nuevo asiento comprado',
            data: newAsiento,
            status: 201,
        });
    } catch (error) {
        console.error("❌ Error en getAllPropiedades:", error);
        return res.status(500).json({ message: `Error desconocido: ${error.message}` });
    }
};