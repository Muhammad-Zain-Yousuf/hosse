const express = require('express'),
    dbOperation = require('./dbFiles/dbOperation'),
    cors = require('cors');

dbOperation.getResources().then(res => {
    console.log(res); })

