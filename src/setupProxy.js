const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware(
      '/api', {
        target: 'http://localhost:4000',
        changeOrigin: true,
        secure: false
      }
    )
  );
  app.use(
    createProxyMiddleware(
      '/auth', {
        target: 'http://localhost:4000',
        changeOrigin: true,
        secure: false
      }
    )
  );
}