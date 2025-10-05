import Pasajes from "../modelsPasajes/Pasajes.js";

export const handleNewPasajesAll = async (req, res) => {
    try {
        const body = req.body;
        console.log(body);
        const visitaNew = await Pasajes.create(body);
        return res.status(201).json({
            message: "Visita guardada con éxito",
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