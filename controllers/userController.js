const User = require("../models/User");

const addUser = async (req, res) => {

    try {

        const {
            name,
            email,
            phone
        } = req.body;

        const user =
        await User.create({
            name,
            email,
            phone
        });

        res.status(201).json({
            message:
            "User Added Successfully",
            user
        });

    } catch (error) {

        res.status(500).json({
            message:
            error.message
        });
    }
};

const getUsers = async (req, res) => {

    try {

        const users =
        await User.findAll();

        res.status(200).json(users);

    } catch (error) {

        res.status(500).json({
            message:
            error.message
        });
    }
};

const deleteUser = async (req, res) => {

    try {

        const { id } = req.params;

        const user =
        await User.findByPk(id);

        if (!user) {

            return res.status(404).json({
                message:
                "User Not Found"
            });
        }

        await user.destroy();

        res.status(200).json({
            message:
            "User Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message:
            error.message
        });
    }
};

module.exports = {
    addUser,
    getUsers,
    deleteUser
};