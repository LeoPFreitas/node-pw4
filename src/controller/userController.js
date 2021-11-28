const {createUser, getUserById, getAllUsers, updateUser, deleteUser, login} = require('../service/userService');

exports.create = (req, res) => {
    createUser(req, res).then(r => r);
};

exports.login = (req, res) => {
    login(req, res).then(r => r);
};

exports.findAll = (req, res) => {
    getAllUsers(req, res).then(r => r);
};

exports.findOne = (req, res) => {
    getUserById(req, res).then(r => r);
};

exports.update = (req, res) => {
    updateUser(req, res).then(r => r);
};

exports.delete = (req, res) => {
    deleteUser(req, res).then(r => r);
};
