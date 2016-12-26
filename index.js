const PORT   = 33333;
const HOST   = '127.0.0.1';

const dgram  = require('dgram');
const server = dgram.createSocket('udp4');

server.on('listening',() => {
  let address = server.address();
  console.log(`Listening on ${address.address}:${address.port}`);
});

server.on('message', (msg, remote) => {
  console.log(`Got message from [${remote.address}:${remote.port}]: ${msg}`);
});

server.bind(PORT, HOST);