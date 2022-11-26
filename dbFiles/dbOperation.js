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
        console.log(user)
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


const logIn = async(Creds) => {
    try {
        let pool = await sql.connect(config);
        let user = await pool.request().query(`SELECT * from Users where student_email = '${Creds.Email}' and s_password = '${Creds.Password}'`);
        // console.log(user)
        return user;
    } catch (error) {
        console.log(error);
    }
}


const addinstructor = async(User) => {
    try {
        let pool = await sql.connect(config);
        let resources = await pool.request()
        .query(`IF NOT EXISTS (SELECT * FROM Instructors WHERE instructor_email = '${User.Email}')
        INSERT INTO Instructors(instructor_name, depart_id, instructor_email) Values ('${User.Name}' , (select depart_id from Departments where depart_name = '${User.Department}') , '${User.Email}')`);
        // console.log(resources);
        return resources.rowsAffected[0];
    } catch (error) {
        console.log(error);
    }
}
const addcourse = async(User) => {
    try {
        let pool = await sql.connect(config);
        let resources = await pool.request()
        .query(`INSERT INTO Users Values (${User.StdID} , '${User.Name}' , '${User.Password}' , (Select major_id from Majors where major_name = '${User.Major}') , ${User.Batch}, '${User.Email}', '${User.PhoneNumber}')`);
        return resources.rowsAffected[0];
    } catch (error) {
        console.log(error);
    }
}
const addresource = async(User) => {
    try {
        let pool = await sql.connect(config);
        let resources = await pool.request()
        .query(`INSERT INTO Users Values (${User.StdID} , '${User.Name}' , '${User.Password}' , (Select major_id from Majors where major_name = '${User.Major}') , ${User.Batch}, '${User.Email}', '${User.PhoneNumber}')`);
        return resources.rowsAffected[0];
    } catch (error) {
        console.log(error);
    }
}
const addform = async(User) => {
    try {
        let pool = await sql.connect(config);
        let resources = await pool.request()
        .query(`INSERT INTO Users Values (${User.StdID} , '${User.Name}' , '${User.Password}' , (Select major_id from Majors where major_name = '${User.Major}') , ${User.Batch}, '${User.Email}', '${User.PhoneNumber}')`);
        return resources.rowsAffected[0];
    } catch (error) {
        console.log(error);
    }
}
const addevent = async(User) => {
    try {
        let pool = await sql.connect(config);
        let resources = await pool.request()
        .query(`INSERT INTO Users Values (${User.StdID} , '${User.Name}' , '${User.Password}' , (Select major_id from Majors where major_name = '${User.Major}') , ${User.Batch}, '${User.Email}', '${User.PhoneNumber}')`);
        return resources.rowsAffected[0];
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    createUser,
    logIn,
    addinstructor,
    addcourse,
    addresource,
    addform,
    addevent,
    getResources }