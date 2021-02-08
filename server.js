var http = require('http');
var fs = require('fs');
const { resolveCname } = require('dns');

const server = http.createServer((req , res)=>{







 res.setHeader('content-type','text/html');

let path = './';
switch(req.url){
    case '/':
        path += 'first.html';
        break;
    case '/about' :
        path += 'about.html';
        break;
    case '/servicios' :
            path += 'servicios.html';
            break;
            case '/contacto' :
                path += 'contacto.html';
                break;
     default:
            path += '404.html';
            break;
}
 fs.readFile(path,(err,data)=>{
     if (err) {
         console.log(err);
         res.end();
     }else{
         res.write(data);
         res.end();
     }
 })

});



server.listen(3000)