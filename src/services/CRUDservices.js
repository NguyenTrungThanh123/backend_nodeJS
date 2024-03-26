const connection = require('../config/database');


const getAlluser = async () => {
    let [results, fields] = await connection.query('Select * from Users');

    return results

}
const searchOneUser = async (id) => {
    let [results, fields] = await connection.query('Select * from Users u where ? = u.id', [id]);
    let user = results && results.length > 0 ? results[0] : null
    return user
}

module.exports = { getAlluser, searchOneUser };