const Router = require('express').Router();

Router.get('/', (request, reply) => {
  reply.redirect('/index.html');
})

module.exports = Router;
