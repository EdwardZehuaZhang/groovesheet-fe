const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api-orchestrator-test-700212390421.asia-southeast1.run.app',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // remove /api prefix when forwarding
      },
      onProxyReq: function(proxyReq, req, res) {
        console.log('Proxying:', req.method, req.path, '->', proxyReq.path);
      },
      logLevel: 'debug',
    })
  );
};
