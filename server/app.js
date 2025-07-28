// componentes
import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import path from 'path';
import process from 'process';

// middlewares
import notFoundMiddleware from './src/middlewares/notFoundMiddleware.js';

// rutas
import router from './src/routes/router.js';

// variables
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares básicos
app.use(cors());
app.use('/static', express.static(path.join(process.cwd(), 'public')));
app.use(express.json());

// Rutas
app.use('/api', router);

// Middleware 404
app.use(notFoundMiddleware);

// Middleware de errores
app.use((err, req, res) => {
    console.error(err);
    res.status(err.httpStatus || 500).send({
        status: 'error',
        message: err.message,
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT} 🚀`);
});

export default app;
