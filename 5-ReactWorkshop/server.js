const express = require('express');
const app = express();

app.use('/', express.static('public'));

app.listen(5555, () => {
  console.log('Apps is up and running at 5555');
});
