const express = require('express');

const app = express();

app.use(express.static('./public'));

app.listen(8080, (err) => {
  if (err) {
    console.log(err);
  }
  console.log('listening on port 8080');
});
