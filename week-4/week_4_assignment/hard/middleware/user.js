const jwt = require("jsonwebtoken");
const dotenv = require('dotenv')

dotenv.config({ path: './.env' })

function userMiddleware(req, res, next) {
    // Implement user auth logic
    const token = req.headers.token;
    const decodedInfo = jwt.verify(token, process.env.JWT_SECRET);

    if (decodedInfo) {
        req.userId = decodedInfo.id;
        next();
    } else {
        res.json({
            message: "You are not logged in!"
        })
    }
}

module.exports = userMiddleware;