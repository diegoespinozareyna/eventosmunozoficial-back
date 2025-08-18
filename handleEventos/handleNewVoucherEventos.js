import { PagoAsientoEventoModel } from "../modelsEventos/pagoAsientoEvento.js";

export const handleNewVoucherEventos = async (req, res) => {
    try {
        const body = await req.body;
        console.log("body: ", body)

        const newVoucherPagoEvento = await PagoAsientoEventoModel.create(body);

        return res.status(201).json({
            message: 'pago de asiento para evento creado exitosamente.',
            data: newVoucherPagoEvento,
            status: 201,
        });
    } catch (error) {
        console.error('Error al crear evento:', error);
        return res.status(500).json({
            message: `'Error al crear evento:' ${error}`,
        });
    }
}