import Pasajes from "../modelsPasajes/Pasajes.js";

export const handlePatchPasajestId = async (req, res) => {
    try {
        const { id } = req.query;
        const body = req.body;
        console.log(body);
        const visitaUpdated = await Pasajes.findByIdAndUpdate(id, body);
        return res.status(201).json({
            message: "Visita actualizada con éxito",
            data: visitaUpdated,
            status: 201,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Visita actualizada con éxito",
            data: "no encontrados",
            status: 500,
        });
    }
}