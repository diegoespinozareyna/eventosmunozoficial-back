import Pasajes from "../modelsPasajes/Pasajes.js";

export const handleGetPasajesAll = async (req, res) => {
    try {
        const pasajesAll = await Pasajes.find({}).exec();
        return res.status(201).json({
            message: "Pasajes obtenidos desde la base de datos",
            data: pasajesAll,
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