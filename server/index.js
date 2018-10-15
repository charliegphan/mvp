const express = require('express');

const app = express();

app.use(express.static('./public'));

app.post('/trips', (req, res) => {

});

app.listen(8080, (err) => {
  if (err) {
    console.log(err);
  }
  console.log('listening on port 8080');
});
