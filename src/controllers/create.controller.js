
const connection = require('../config/database');
const getCreateUser = (req, res) => {

    return (
        res.render("create.ejs")
    )

}

const postCreateUser = async (req, res) => {

    let { email, lname, city } = req.body;
    const [result, fields] = await connection.query(` INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`, [email, lname, city])
    if (result !== undefined) {
        res.send('Created successfully')
    }
    else {
        res.send('Failed to create')
    }
}


module.exports = { getCreateUser, postCreateUser }