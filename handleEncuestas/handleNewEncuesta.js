import { EncuestaModel } from "../modelsEncuestas/encuesta.js";

export const handleNewEncuesta = async (req, res) => {
    try {
        const body = await req.body;
        console.log("body: ", body)

        const newEncuesta = await EncuestaModel.create(body?.jsonSend);

        return res.status(201).json({
            message: 'Evento creado exitosamente.',
            data: newEncuesta,
            status: 201,
        });
    } catch (error) {
        console.error('Error al crear evento:', error);
        return res.status(500).json({
            message: `'Error al crear evento:' ${error}`,
        });
    }
}