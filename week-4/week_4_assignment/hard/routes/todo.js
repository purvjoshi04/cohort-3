const { Router } = require("express");
const adminMiddleware = require("../middleware/user");
const { Todo } = require("../database/index.js")
const router = Router();

// todo Routes
router.post('/', async (req, res) => {
    // Implement todo creation logic
    const userId = req.body.userId;
    const title = req.body.title;

    await Todo.create({
        userId,
        title
    });

    res.json({
        message: "Todo created!"
    })

});

router.put('/', adminMiddleware, (req, res) => {
    // Implement update todo  logic


});

router.delete('/', adminMiddleware, (req, res) => {
    // Implement delete todo logic
});

router.delete('/:id', adminMiddleware, (req, res) => {
    // Implement delete todo by id logic
});


router.get('/', adminMiddleware, (req, res) => {
    // Implement fetching all todo logic
});

router.get('/:id', adminMiddleware, (req, res) => {
    // Implement fetching todo by id logic
});

module.exports = router;