const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT

const auth = (req, res, next) => {
    // const token = req.header('Authorization').replace("Bearer", "");
    // from frontend it gives the as "Bearer "token" " now take token alone using replace / split

    const token = req.header('Authorization').split(" ")[1];


    if (!token) return res.status(401).json({ error: "Token required" });
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded.id;
        next();
    } catch (err) {
        res.status(401).json({ error: "Invalid Token" });
    }
};

module.exports = auth;