const config = {
    user :'hosseuser2',
    password: '1234',
    server: 'DESKTOP-NMEG0OH', // wo name jo connect krte we / se pehle aye
    database: 'OSSE2',
    options: {
        trustServerCertificate: true,
        trustedConnection: false,
        enableArithAbort: true,
        instancename: '' // Instance name jo connect mai / k bad aye
    },
    port:1433

}

module.exports = config;