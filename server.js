
const express = require('express');
const app = express();

app.use(express.static('./dist/wuestenrot'));
app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/wuestenrot/'}
);
});
app.listen(process.env.PORT || 8080);
