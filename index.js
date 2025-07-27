import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());

// capturar body
app.use(express.urlencoded({ extended: false }));

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.text({ limit: '200mb' }));

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 7000;
const HOST = "0.0.0.0";

app.get("/", (req, res) => {
    res.send("Servidor funcionando correctamente 🚀");
});

app.listen(PORT, HOST, () => {
    console.log(`Servidor escuchando en http://${HOST}:${PORT}`);
});