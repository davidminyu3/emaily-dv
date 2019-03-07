const proxy = require('http-proxy-middleware');

const baseURL = 'http://localhost:5000';

module.exports = app => {
  app.use(proxy('/auth/google', { target: baseURL }))
  app.use(proxy('/api/*', { target: baseURL }));
};

