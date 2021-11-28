const db = require('../models');
const User = db.users;

exports.createUser = async (req, res) => {
    if (!req.body.name || !req.body.password) {
        res.status(400).send({
            message: 'Invalid body request. Name and password cannot be null or empty.'
        });
        return;
    }

    const user = {
        name: req.body.name,
        password: req.body.password
    };

    User.create(user)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Server could not respond properly"
            })
        })
}

exports.login = async (req, res) => {
    db.sequelize.query('SELECT * FROM users WHERE name = :name AND password = :password', {
        replacements: {
            name: req.body.name,
            password: req.body.password
        },
        type: db.sequelize.QueryTypes.SELECT
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(400).send({
                message: 'User not found!'
            });
        });
};

exports.updateUser = async (req, res) => {
    const id = req.params.id;

    User.update(req.body, {
        where: {id: id}
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: `Updated user with ID ${id}.`
                });
            } else {
                res.send({
                    message: `Cannot update user with ID ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Server could not respond properly"
            });
        });
}

exports.deleteUser = async (req, res) => {
    const id = req.params.id;

    User.destroy({
        where: {id: id}
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: `Removed user with ID ${id}.`
                });
            } else {
                res.send({
                    message: `Cannot delete user with ID ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Server could not respond properly"
            });
        });
}

exports.getAllUsers = async (req, res) => {
    User.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error retrieving all users"
            });
        });
}

exports.getUserById = async (req, res) => {
    const userId = req.params.id

    User.findByPk(userId)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error retrieving User with id " + userId
            });
        });
}