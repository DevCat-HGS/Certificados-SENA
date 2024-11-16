import jwt from 'jsonwebtoken';
import pool from '../config/database.js';

export const login = async (req, res) => {
  try {
    const { documentType, documentNumber } = req.body;
    
    if (!documentType || !documentNumber) {
      return res.status(400)
        .header('Access-Control-Allow-Origin', 'http://localhost:5173')
        .json({ message: 'Tipo de documento y número son requeridos' });
    }
    
    const [users] = await pool.query(
      'SELECT * FROM users WHERE document_type = ? AND document_number = ?',
      [documentType, documentNumber]
    );

    if (users.length === 0) {
      return res.status(401)
        .header('Access-Control-Allow-Origin', 'http://localhost:5173')
        .json({ message: 'Usuario no encontrado' });
    }

    const user = users[0];
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.header('Access-Control-Allow-Origin', 'http://localhost:5173')
       .json({
          token,
          user: {
            id: user.id,
            role: user.role,
            name: user.name
          }
       });
  } catch (error) {
    console.error('Error en login:', error);
    res.status(500)
       .header('Access-Control-Allow-Origin', 'http://localhost:5173')
       .json({ message: 'Error en el servidor' });
  }
};

export const verifyToken = (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ message: 'Token no proporcionado' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.json(decoded);
  } catch (error) {
    res.status(401).json({ message: 'Token inválido' });
  }
};