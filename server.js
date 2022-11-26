const express = require('express'),
    dbOperation = require('./dbFiles/dbOperation'),
    cors = require('cors');


const API_PORT = process.env.PORT || 5000;
const app = express();

let client;
let session;
app.use(express.json());
app.use(express.urlencoded())
app.use(cors());

app.post('/api', async (req, res) =>{
    console.log('called');
    const result =  await dbOperation.getresource(req.body.name);
    res.send(result.recordset);
});

app.post('/hello', async (req, res) => {
    console.log('called');
    await dbOperation.createUser(req.body);
    // const result = await dbOperation.getresource(req.body.name);
    res.send({result: 'hi'});
});
    

// let Student = new Employee(1, 'Ali', 'Alavi', '1234', 'CS', 2019,  'ab01234@st.habib.edu.pk', 03001234567);
    


dbOperation.getResources().then(res => {
    console.log(res); })


// dbOperation.creatUser();



app.listen(API_PORT, ()=> console.log(`LISTENING ON PORT ${API_PORT}`));

