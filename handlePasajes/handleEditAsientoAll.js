import CompraAsiento from "../models/compraAsiento.js";

export const handleEditAsientoAll = async (req, res) => {
    try {
        const body = req.body;
        console.log(body);

        const filter = {
            status: body?.status,
            documentoUsuario: body?.documentoUsuario,
            nombres: body?.nombres,
            apellidoPaterno: body?.apellidoPaterno,
            apellidoMaterno: body?.apellidoMaterno,
            celular: body?.celular,
            email: body?.email,
            fileUrl: body?.fileUrl,
            grupoAsientosComprados: body?.grupoAsientosComprados,
        }

        if (body?.documentoUsuario == undefined || body?.documentoUsuario == null || body?.documentoUsuario == "") {
            delete filter.documentoUsuario;
        }
        if (body?.nombres == undefined || body?.nombres == null || body?.nombres == "") {
            delete filter.nombres;
        }
        if (body?.apellidoPaterno == undefined || body?.apellidoPaterno == null || body?.apellidoPaterno == "") {
            delete filter.apellidoPaterno;
        }
        if (body?.apellidoMaterno == undefined || body?.apellidoMaterno == null || body?.apellidoMaterno == "") {
            delete filter.apellidoMaterno;
        }
        if (body?.celular == undefined || body?.celular == null || body?.celular == "") {
            delete filter.celular;
        }
        if (body?.email == undefined || body?.email == null || body?.email == "") {
            delete filter.email;
        }
        if (body?.fileUrl == undefined || body?.fileUrl == null || body?.fileUrl == "") {
            delete filter.fileUrl;
        }
        if (body?.grupoAsientosComprados == undefined || body?.grupoAsientosComprados == null || body?.grupoAsientosComprados == "") {
            delete filter.grupoAsientosComprados;
        }

        console.log(filter);

        const visitaNew = await CompraAsiento.findOneAndUpdate({ _id: body.id }, {
            $set: { ...filter },
            new: true,
        });
        console.log(visitaNew);
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