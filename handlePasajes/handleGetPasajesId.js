import Pasajes from "../modelsPasajes/Pasajes.js";

export const handleGetPasajesId = async (req, res) => {
    try {
        const { id } = req.query;
        console.log(req.query);
        console.log(id);
        const pasajesId = await Pasajes.find({ _id: id });
        console.log(pasajesId);
        return res.status(201).json({
            message: "Pasajes obtenidos desde la base de datos",
            data: pasajesId,
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