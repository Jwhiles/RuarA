const Express = require('express');

const server = require('./server.js');

const port = process.env.PORT || 8000;

//runs the server
server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
