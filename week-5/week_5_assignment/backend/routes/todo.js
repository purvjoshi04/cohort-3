//  start writing your code from here

const express = require("express");
const { Todo } = require("../db");
const { authenticateJwt } = require("../middleware/user.js");

const router = express.Router();

router.use(authenticateJwt);

router.post("/", async (req, res) => {
    const createPayload = req.body;

    if (!createPayload.title) {
        return res.status(400).json({
            message: "You sent the wrong inputs"
        });
    }
    try {
        const newTodo = await Todo.create({
            title: createPayload.title,
            comepleted: false,
            userId: req.userId
        });

        res.status(201).json({
            message: "Todo created",
            todo: newTodo
        });
    } catch (error) {
        req.status(500).json({
            message: "Error creating todo",
            error: error.message
        })
    }
});

router.get("/", async (req, res) => {
    try {
        const todos = await Todo.find({ userId: req.userId });

        res.json({
            todos: todos,
        })
    } catch (error) {
        res.status(500).json({
            message: "Error fetching todos",
            error: error.message
        });
    }
});


router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updatePayload = req.body;

    if (typeof updatePayload.comepleted === "undefined") {
        return res.status(400).status.json({
            message: "You must provise a completed status."
        });
    }

    try {
        const result = await Todo.updateOne(
            { _id: id },
            { comepleted: updatePayload.comepleted }
        );

        res.json({
            message: "Todo marked as completed",
            todos: result
        })
    } catch (error) {
        res.status(500).json({
            message: "Error updating todo.",
            error: error.message,
        })
    }
});

module.exports = router;