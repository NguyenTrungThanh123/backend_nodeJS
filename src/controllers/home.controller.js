
const { getAlluser } = require('../services/CRUDservices');
const getHomepage = async (req, res) => {

    const result = await getAlluser()
    return (
        res.render("home.ejs", { listUsers: result })
    )
}
const getSamplepage = (req, res) => {
    res.render('sample.ejs')
}


module.exports = {
    getHomepage,
    getSamplepage,
}