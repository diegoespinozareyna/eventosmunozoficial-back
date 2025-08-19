import { UsersModel } from "../models/users.js";

export const handleGetPatrocinadoresUnique = async (req, res) => {
    try {
        let query = req.query.query?.trim() || '';

        if (!query) {
            return res.status(400).json({ message: "Query vacío." });
        }

        const regex = new RegExp(query.replace(/\s+/g, '.*'), 'i');
        const results = await UsersModel.aggregate([
            {
                $addFields: {
                    fullName: {
                        $concat: [
                            { $ifNull: ["$nombres", ""] },
                            " ",
                            { $ifNull: ["$apellidoPaterno", ""] },
                            " ",
                            { $ifNull: ["$apellidoMaterno", ""] },
                        ],
                    },
                },
            },
            {
                $match: {
                    $or: [
                        { documentoUsuario: { $regex: regex } },
                        { fullName: { $regex: regex } },
                    ],
                },
            },
            { $limit: 5 },
            {
                $project: {
                    value: "$_id",
                    label: {
                        $concat: [
                            "$documentoUsuario",
                            " - ",
                            "$nombres",
                            " ",
                            "$apellidoPaterno",
                            " ",
                            "$apellidoMaterno"
                        ]
                    }
                }
            }
        ]);

        return res.status(201).json({
            message: 'Usuarios encontrados exitosamente.',
            data: results,
            status: 201,
        });
    } catch (error) {
        console.error("Error al obtener patrocinadores únicos:", error);
        return res.status(500).json({ message: `Error al obtener patrocinadores únicos: ${error.message}` });
    }
};