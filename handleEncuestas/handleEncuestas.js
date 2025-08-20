import { EncuestaModel } from "../modelsEncuestas/encuesta.js";

export const handleEncuestas = async (req, res) => {
    try {

        const encuestas = await EncuestaModel.find();
        let prom1 = 0;
        let prom2 = 0;
        let prom3 = 0;
        encuestas.forEach(encuesta => {
            console.log("encuesta: ", encuesta)
            prom1 = prom1 + Number(encuesta.pregunta1) / encuestas.length
            prom2 = prom2 + Number(encuesta.pregunta2) / encuestas.length
            prom3 = prom3 + Number(encuesta.pregunta3) / encuestas.length
        })

        console.log("prom1: ", prom1)
        console.log("prom2: ", prom2)
        console.log("prom3: ", prom3)

        const encuestasLimit = await EncuestaModel.find()
            .sort({ createdAt: -1 }) // Orden descendente (más reciente primero)
            .limit(50);

        return res.status(201).json({
            message: 'Evento creado exitosamente.',
            data: { encuestasLimit, prom1, prom2, prom3, ultimaSugerencia: encuestasLimit[0].pregunta4, TotalEncuestas: encuestas.length },
            status: 201,
        });
    } catch (error) {
        console.error('Error al crear evento:', error);
        return res.status(500).json({
            message: `'Error al crear evento:' ${error}`,
        });
    }
}