const config = require('./dbConfig'),
    sql = require('mssql');


const getResources = async(name) => {
    try {
        let pool = await sql.connect(config);
        let resources = await pool.request().query("SELECT * FROM Courses");
        console.log(resources)
        return resources;
    } catch (error) {
        console.log(error);
    }
}

const getUser = async(name) => {
    try {
        let pool = await sql.connect(config);
        let user = await pool.request().query("SELECT * Users");
        console.log(resources)
        return user;
    } catch (error) {
        console.log(error);
    }
}


const createUser = async(User) => {
    try {
        let pool = await sql.connect(config);
        let resources = await pool.request()
        .query(`INSERT INTO Users Values (${User.StdID} , '${User.Name}' , '${User.Password}' , (Select major_id from Majors where major_name = '${User.Major}') , ${User.Batch}, '${User.Email}', '${User.PhoneNumber}')`);
        return resources;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    createUser,
    getResources }