import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const DB_URIALL = `mongodb://localhost:27017/basemunoz`;

let db2 = null;

const getDbInstance = () => {
    if (!db2) {
        console.log("Conectándome a MongoDB...");
        db2 = mongoose.createConnection(DB_URIALL, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true
        });

        db2.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
        db2.once('open', () => console.log('Conectado a MongoDB!'));
    }
    return db2;
};

db2 = getDbInstance();

export default db2;