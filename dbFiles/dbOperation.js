const config = require('./dbConfig'),
    sql = require('mssql');


const getResources = async() => {
    try {
        let pool = await sql.connect(config);
        let resources = await pool.request().query("SELECT * FROM Courses");
        console.log(resources)
        return resources;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getResources }