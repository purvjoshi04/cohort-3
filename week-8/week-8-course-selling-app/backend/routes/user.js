const { Router } = require("express");
const userRouter = Router();

userRouter.post('/login', (req, res) => {
    res.json({
        msg: "login user"
    })
})
userRouter.post('/signup', (req, res) => {
    res.json({
        msg: "signup user"
    })

})
userRouter.get('/purchases', (req, res) => {
    res.json({
        msg: "purchase curse user"
    })
})

module.exports = {
    userRouter: userRouter
}