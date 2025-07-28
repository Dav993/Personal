// src/routes/baseRoutes.js

import { Router } from 'express';

const router = Router();

// Ruta de prueba
router.get('/', (req, res) => {
    res.json({ message: 'API funcionando correctamente ✅' });
});

export default router;
