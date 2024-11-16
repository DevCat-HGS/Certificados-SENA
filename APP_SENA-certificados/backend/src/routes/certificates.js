import express from 'express';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

router.get('/', authenticateToken, async (req, res) => {
  try {
    res.json({ message: 'Ruta de certificados funcionando' });
  } catch (error) {
    res.status(500).json({ message: 'Error del servidor' });
  }
});

export default router; 