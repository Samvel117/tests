const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const secret = 'shhhh';
const models = require('../db/models');

class UserController {

    register = async(req,res) =>  {
        try {
            const { fullname, email, password, phone,role } = req.body;
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            await models.Users.create({
                fullname,
                email,
                password:hashedPassword,
                phone,
                role
            })
            res.send("you have successfully registered!");
        } catch (err) {
            res.status(400).send('Something went wrong')
            console.log('error=>', err);
        }
    }
}
module.exports = UserController;
