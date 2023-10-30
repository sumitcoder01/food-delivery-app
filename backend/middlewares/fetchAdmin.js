const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.SECRET;

const fetchAdmin = (req, res, next) => {
    //Get the user from jwt token and add id to req object
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).json({ success: false, error: "Not a Admin" });
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        if (data.user.id !== process.env.ADMIN) return res.status(401).json({ success: false, error: "Not a Admin" });
    } catch (error) {
        res.status(401).send({ success: false, error: "Not a Admin" });
    }
    next();
};


module.exports = fetchAdmin;