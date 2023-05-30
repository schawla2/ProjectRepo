const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = 5000; // You can change the port as needed

// Proxy middleware configuration
app.use(
  '/api/product',
  createProxyMiddleware({
    target:
      'https://www.amazon.com/Amble-Basketball-Replacement-Weather-Outdoor/dp/B07VVPB8KX/ref=sr_1_1_sspa?crid=7TY4QFCLZLVS&keywords=basketball+net&qid=1685477353&sprefix=bask%2Caps%2C136&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFaQlQ1UUdWNzdXMDAmZW5jcnlwdGVkSWQ9QTA4NjMzMDBCSUlUTUVLVk01WEgmZW5jcnlwdGVkQWRJZD1BMDMxMDk1NDJYU1BQOExHV0RWOFQmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl',
    changeOrigin: true,
    secure: false,
  })
);

// Start the server
app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});