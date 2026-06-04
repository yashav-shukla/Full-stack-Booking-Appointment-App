const express = require("express");

const router =
express.Router();

const {
    addUser,
    getUsers,
    deleteUser
} = require(
    "../controllers/userController"
);

router.post("/", addUser);

router.get("/", getUsers);

router.delete("/:id", deleteUser);

module.exports = router;