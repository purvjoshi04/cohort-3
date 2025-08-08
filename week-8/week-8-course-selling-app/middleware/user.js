const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');

function userMiddleware (req, res) {
    const token = req.headers;
    const decodedInfo = jwt.verify(token, process.env.JWT_SECRET);

    if (decodedInfo) {
        req.userId = qw
    }
}