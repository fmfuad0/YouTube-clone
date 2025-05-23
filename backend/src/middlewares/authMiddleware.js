import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
const token = req.header('Authorization')?.replace('Bearer ', '') || req.cookies["token"];
if (!token) return res.status(401).json({ error: 'Access denied' });
    try {
        const user = jwt.verify(token, process.env.JWT_SECRET);
        if(!user) return res.status(401).json({ error: 'Access denied' });
        req.user = user;
        next();
    } catch (error) {
        res.status(400).json({error: 'Invalid token'});
    }
}

export {authMiddleware};