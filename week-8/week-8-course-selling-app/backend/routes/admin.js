const { Router } = require("express");

const adminRouter = Router();

adminRouter.post('/login', (req, res) => {
    res.json({
        msg: "admin login"
    })
})

adminRouter.post('/signup', (req, res) => {
    res.json({
        msg: "admin signup"
    })
})

adminRouter.post('/course', (req, res) => {
    res.json({
        msg: "admin course post"
    })
})

adminRouter.put('/course', (req, res) => {
    res.json({
        msg: "admin course edit"
    })
})  

adminRouter.get('/course/all', (req, res) => {
    res.json({
        msg: "admin get all course"
    })
})

module.exports = {
    adminRouter: adminRouter
};