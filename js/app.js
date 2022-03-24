import * as THREE from '../node_modules/three/build/three.module.js'
console.log(THREE);

var http = require('http');
var url = require('url');
var qs = require('querystring');
var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    if(pathname === '/'){
      <html>
          <head>
            'Welcome'
          </head>
          <script>
            "THREE.JS"
          </script>
      </html>
    } else {
        response.writeHead(404);
        response.end('NOT FOUND');
    }
});

app.listen(3000);
