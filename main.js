var serveStatic = require('serve-static');

var admin = require('connect');
var client = require('connect');

admin().use(serveStatic(__dirname + '/admin/')).listen(9010, function(){
    console.log('Admin :: Running on port 9010');
});

client().use(serveStatic(__dirname + '/client/')).listen(9020, function(){
    console.log('Client :: Running on port 9020');
});
