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

const modifyname = async(resinfo) => {
    try {
        let pool = await sql.connect(config);
        let resources = await pool.request().query(`Update Course_Resource set Resource_Name = '${resinfo.Name}' where Resource_id = ${resinfo.id}`);
        // console.log(resources)
        return resources.rowsAffected[0];;
    } catch (error) {
        console.log(error);
    }
}
const modifylink = async(resinfo) => {
    try {
        let pool = await sql.connect(config);
        let resources = await pool.request().query(`Update Course_Resource set Resource_link = '${resinfo.link}' where Resource_id = ${resinfo.id}`);
        // console.log(resources)
        return resources.rowsAffected[0];;
    } catch (error) {
        console.log(error);
    }
}
const modifytype = async(resinfo) => {
    try {
        let pool = await sql.connect(config);
        let resources = await pool.request().query(`Update Course_Resource set Res_category = '${resinfo.Type}' where Resource_id = ${resinfo.id}`);
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
const addSuggestion = async(User) => {
    try {
        let pool = await sql.connect(config);
        let resources = await pool.request()
        .query(`INSERT INTO Resource_suggestions Values(resource_name, resource_link, Course) (${User.resname} , '${User.link}' , (Select course_id from Courses where course_name = '${User.Course}'))`);
        return resources.rowsAffected[0];
    } catch (error) {
        console.log(error);
    }
}

const viewUser = async(User) => {
    try {
        let pool = await sql.connect(config);
        let resources = await pool.request()
        .query(`SELECT s.Student_id, s.Student_name, m.major_name, s.batch, s.student_email, s.phone_number, d.depart_name, k.School_Name  FROM Users as s inner join Majors as m on m.major_id = s.major inner join Departments as d on d.depart_id = m.depart_id inner join School as k on k.School_id = d.School_id where student_id = ${User.id}`);
        return resources.recordset;
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
    delResource,
    modifyname,
    modifylink,
    modifytype,
    addSuggestion,
    viewUser
}