import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import cors from 'cors';
import usersRouter from './routes/users.routes.js';
import eventosRouter from './routes/eventos.routes.js';
import encuestasRouter from './routes/encuestas.routes.js';
import pasajesRouter from './routes/pasajes.routes.js';

dotenv.config();

const app = express();
app.use(cors());

// capturar body
app.use(express.urlencoded({ extended: false }));

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.text({ limit: '200mb' }));

app.use('/api/auth', authRoutes);
app.use('/api/users', usersRouter);
app.use('/api/eventos', eventosRouter);
app.use('/api/encuestas', encuestasRouter);
app.use('/api/pasajes', pasajesRouter);

const PORT = process.env.PORT || 7000;
const HOST = "0.0.0.0";

app.get("/", (req, res) => {
    res.send("Servidor funcionando correctamente 🚀");
});

app.listen(PORT, HOST, () => {
    console.log(`Servidor escuchando en http://${HOST}:${PORT}`);
});