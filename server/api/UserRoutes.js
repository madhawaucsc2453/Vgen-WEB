const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/userSchema');
const bcrypt = require('bcrypt');
router.post("/signinuser", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({
        where: {
            email: email
        }
    }).then(result => {
        bcrypt.compare(password, result.toJSON().password, (err, result_2) => {
            if (err) {
                res.send(200);
            }
            if (result_2) {
                const type = result.toJSON().type;
                const payload = {
                    userId: result.toJSON().id,
                    password: result.toJSON().password,
                    time: new Date()
                };
                const secretKey = 'Avishka';
                const token = jwt.sign(payload, secretKey, { expiresIn: '10h' });
                const response = { type, token };
                res.send(response);
            } else {
                res.send(200);
            }
        });

    }).catch((error) => {
        console.error('Failed to retrieve data : ', error);
    });
})
router.post("/registeruser", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            res.send("unsuccessfull");
        } else {
            User.create({ email: email, password: hash });
            res.send("Successfull");
        }
    });
})
module.exports = router;