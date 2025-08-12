import ConfigsReservaFutbol from "../models/configsReservaFutbol.js";

export const handleGetConfigsReservaFutbol = async (req, res) => {
    try {
        const configs = await ConfigsReservaFutbol.find();

        return res.status(201).json({
            message: "Propiedades obtenidas desde la base de datos",
            data: configs,
            status: 201,
        });
    } catch (error) {
        console.error("❌ Error en getAllPropiedades:", error);
        return res.status(500).json({ message: `Error desconocido: ${error.message}` });
    }
};