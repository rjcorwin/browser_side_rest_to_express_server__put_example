
var http = require('http')
var express = require('express')
var _ = require('underscore')
var app = express();

app.use(express.bodyParser())

app.put('/example', function(req, res){
   res.send('')
   var data = JSON.parse(_.keys(req.body)[0])
   console.log(data)
 })

app.get(/^(.+)$/, function(req, res) { res.sendfile('./public/' + req.params[0]); });

app.listen(1337)


