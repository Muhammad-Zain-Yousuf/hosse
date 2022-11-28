const config = {
    user :'hosseuser',
    password: '1234',
    server: 'MUHAMMADS', // wo name jo connect krte we / se pehle aye
    database: 'OSSE',
    options: {
        trustServerCertificate: true,
        trustedConnection: false,
        enableArithAbort: true,
        instancename: 'NEW' // Instance name jo connect mai / k bad aye
    },
    port:1433

}

module.exports = config;