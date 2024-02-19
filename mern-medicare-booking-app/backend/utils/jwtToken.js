import User from '../models/UserSchema.js';
import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });

    return token;
};