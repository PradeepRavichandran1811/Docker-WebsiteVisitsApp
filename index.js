// Author: Pradeep Ravichandran
const express = require('express');
const redis = require("redis");

const app = express();
const client = redis.createClient({
    host: 'redis-server',
    port:6379   
});
client.set('visits',0)
app.get('/',(req,res) => {
     client.get('visits',(err,visits) => {
         res.send("Welcome to my Docker based Web application. You have visited " +visits +" times")
         client.set('visits', parseInt(visits) +1)
     });
});

app.listen(8002, () => {
    console.log('Listening on port 8002 ');
});