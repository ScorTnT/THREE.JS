/* var THREE = require('/node_modules/three/build/three.module.js');
console.log(THREE); */
var template = require('./js/template');
var http = require('http');
var url = require('url');
var qs = require('querystring');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    if(pathname === '/'){
      var title = 'Welcome';
        var description = 'Hello, THREE.JS';
        var list = template.list('THREE');
        var html = template.HTML(title, list,
            `<h2>${title}</h2>${description}`,
            ` <a href="/create">create</a>`
        );
        response.writeHead(200);
        response.end(html);
    } else {
        response.writeHead(404);
        response.end('NOT FOUND');
    }
});

app.listen(3000);
