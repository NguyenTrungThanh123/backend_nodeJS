const { searchOneUser } = require('../services/CRUDservices')

const getUpdatePage = async (req, res) => {
    console.log(req.params)
    const result = await searchOneUser(req.params.id)
    if (result !== null) {
        return (
            res.render('edit.ejs', { UserUpdate: result })
        )
    }
    else {
        res.send('ID is empty');
    }
}

module.exports = { getUpdatePage };