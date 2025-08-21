import CompraAsiento from "../models/compraAsiento.js";
import { PagoAsientoEventoModel } from "../modelsEventos/pagoAsientoEvento.js";

export const handleGetAsientosIdMatrix = async (req, res) => {
    try {
        const idMatrix = req.query.idMatrix;
        console.log("idMatrix: ", idMatrix)
        const query = { codMatrixTicket: idMatrix, status: { $ne: "3" } };
        console.log("query: ", query)
        const asientosIdMatrix = await CompraAsiento.find(query).lean();

        console.log("asientosIdMatrix: ", asientosIdMatrix);

        let array = [];
        let array2 = [];
        let item = {};

        // const asientosIdMatrixFiltered = asientosIdMatrix.map(async (asiento) => {
        //     const { _id, codAsiento, codMatrixTicket, status, idTicketAsiento } = asiento;
        //     const response = await PagoAsientoEventoModel.find({ idTicketAsiento });
        //     array.push({
        //         [codAsiento]: response,
        //     })

        //     return array
        // })

        const asientosIdMatrixFiltered = await Promise.all(
            asientosIdMatrix.map(async (asiento) => {
                console.log("asiento: ", asiento)
                const { codAsiento, idTicketAsiento, _id, montoPasarela } = asiento;
                console.log("codAsiento111: ", codAsiento)
                console.log("idTicketAsiento111: ", idTicketAsiento)
                console.log("_id111: ", _id)
                const response = await PagoAsientoEventoModel.find({ idTicketAsiento: _id, status: "0" });

                array.push({
                    codAsiento: codAsiento,
                    ticketsPendings: response.length,
                    pasarela: montoPasarela ? true : false,
                });

                item[codAsiento] = response.length > 0 ? true : false;

                return {
                    codAsiento: codAsiento,
                    ticketsPendings: response.length,
                    pasarela: montoPasarela ? true : false,
                };
            })
        );

        console.log("asientosIdMatrixFiltered: ", asientosIdMatrixFiltered);

        const newData = asientosIdMatrixFiltered.map((asiento) => {
            console.log("asiento: ", asiento)
            const newDato = asientosIdMatrix.find(x => x.codAsiento === asiento.codAsiento);
            newDato.isTicketsPendings = asiento.ticketsPendings
            newDato.isPasarela = asiento.pasarela
            // array2.push(newDato);
            return { ...newDato };
        });

        console.log("newData5: ", newData)

        return res.status(200).json({
            message: "asientos obtenidos desde la base de datos",
            data: newData,
            ticketsPorAsiento: asientosIdMatrixFiltered,
            status: 200,
        });
    } catch (error) {
        console.error("❌ Error en obtener asientos:", error);
    }
}