import ConfigsReservaFutbol from "../models/configsReservaFutbol.js";

export const handlePostConfigsReservaFutbol = async (req, res) => {
    try {
        const body = await req.body;

        console.log("body de postConfigsReservaFutbol: ", body)

        const { proyecto, key, value } = body;

        const configs = await ConfigsReservaFutbol.findOneAndUpdate(
            { proyecto: proyecto },
            {
                $set: {
                    [key]: value,
                }
            },
            { new: true }
        );

        return res.status(201).json({
            message: "Configs editados correctamente",
            data: configs,
            status: 201,
        });

    } catch (error) {
        console.error("❌ Error en getAllPropiedades:", error);
        return res.status(500).json({ message: `Error desconocido: ${error.message}` });
    }
};