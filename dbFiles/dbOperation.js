const config = require('./dbConfig'),
    sql = require('mssql');


const getResource = async() => {
    try {
        let pool = await sql.connect(config);
        let resources = await pool.request().query("select CR.Resource_id, CR.Resource_Name, CR.Resource_link, Category_name, C.course_name from Course_Resource as CR inner join Resource_category as cat on CR.Res_Category = cat.Category_id inner join Courses as C on C.course_id = CR.Course_id");
        // console.log(resources)
        return resources.recordset;
    } catch (error) {
        console.log(error);
    }
}

const delResource = async(resinfo) => {
    try {
        let pool = await sql.connect(config);
        let resources = await pool.request().query(`Delete from Course_Resource where Resource_id = ${resinfo.id}`);
        // console.log(resources)
        return resources.rowsAffected[0];;
    } catch (error) {
        console.log(error);
    }
}

const getEvent = async() => {
    try {
        let pool = await sql.connect(config);
        let resources = await pool.request().query("select e.event_id, e.event_name, e.event_description , et.typename,  eo.organizer_name  from Events as e inner join Event_Types as et on e.event_type = et.typeid inner join event_organizer as eo on eo.organizer_id = e.organizer");
        // console.log(resources)
        return resources.recordset;
    } catch (error) {
        console.log(error);
    }
}
const getCourses = async(name) => {
    try {
        let pool = await sql.connect(config);
        let resources = await pool.request().query("SELECT c.course_id, c.course_name, c.course_level, c.course_code, dp.depart_name FROM Courses as c inner join Departments as dp on c.depart_id = dp.depart_id");
        // console.log(resources)
        return resources.recordset;
    } catch (error) {
        console.log(error);
    }
}

const getInstructors = async(name) => {
    try {
        let pool = await sql.connect(config);
        let resources = await pool.request().query("SELECT c.id, c.instructor_name, c.instructor_email, dp.depart_name FROM Instructors as c inner join Departments as dp on c.depart_id = dp.depart_id");
        // console.log(resources)
        return resources.recordset;
    } catch (error) {
        console.log(error);
    }
}

const getForms = async(name) => {
    try {
        let pool = await sql.connect(config);
        let resources = await pool.request().query("SELECT f.form_tool_id, f.form_name, f.form_link, f.form_description, fc.category_name, o.office_name FROM Forms_Tools as f inner join Form_category as fc on f.form_category = fc.category_id inner join Offices as o on o.office_id = f.office_id");
        // console.log(resources)
        return resources.recordset;
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
    getResource,
    getEvent,
    getForms,
    getInstructors,
    getCourses,
    delResource
}