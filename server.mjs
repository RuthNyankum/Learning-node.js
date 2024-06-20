// import {createServer} from 'node:http';

// // Define request handler
// function requestHandler(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('We have an HTTP Server');
// }

// // Create HTTP Server
// const server = createServer(requestHandler);

// // Listen for incoming request
// server.listen(3000, '127.0.0.1', function() {
//     console.log('Server is running');
// });

import {createServer} from 'node:http';

// Define request handler


// Create HTTP Server
const server = createServer(function (req, res) {
    console.log(req.url);
    if (req.url.includes('create')) {
        // Create file
        res.writeHead('./hello.html', '<h1>Learning Node.js</h1>', (err) => {
            console.log(err);
            // Returnresponse
            res.writeHead(200, {'Content-Type': 'text/html' });
            res.end('<h1>File deleted</h1>');
        });    
        
    } else {
        // Delete file
        unlink('./hello.html', () => {
            // Return response
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<h1>File deleted</h1>');   
        });
    }
    
});


// Listen for incoming request
// THIS
// const.listen = createServer(function () {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//         res.end('<h1>We have an HTTP Server</h1>');
// });

// OR THIS
server.listen(3000, '127.0.0.1', () => {
    console.log('Server is running');
});

// Arrow Function
const handleRequest = () => {}