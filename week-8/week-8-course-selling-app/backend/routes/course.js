const { Router } = require("express");

const courseRouter = Router();

courseRouter.post('/purchase', (req, res) => {
    res.json({
        msg: "purchase course"
    })
})

courseRouter.get('/', (req, res) => {
    res.json({
        msg: "get all course"
    })
})


module.exports = {
    courseRouter: courseRouter
}