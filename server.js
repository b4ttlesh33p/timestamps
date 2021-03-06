// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

const path =require('path')
const moment= require('moment')


app.use("/api/timestamp/:date", (req, res) =>{
  try{  
    new Date(req.params.date)
  } catch (e){
    console.log('error')
    return res.send({error: 'Invalid date'})
  }
    const date = new Date(req.params.date)
    const unix = moment(date).unix()
    const utc = moment(date).format("ddd,D MMM YYYY hh:mm:ss GMT")
    

    res.send({
        unix,
        utc
    })
})

