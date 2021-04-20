const express = require('express');
var cors = require('cors')
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.json());// process json
app.use(express.urlencoded({ extended: true })); 
app.use(cors());
let localArray =[];

app.get('/emp/:id', (req, res) => {
    res.send('Hello Employee ' + req.params.id + ": using params") ;
  });

app.get('/emp', (req, res) => {
    res.send('Hello Employee ' + req.query.id + ": using query String") ;
  });

  app.post('/post', function (req, res) {
      localArray.push(req.body);
      console.log(req.body);
    res.send("Data saved: " + JSON.stringify(req.body.name) );
  });
  app.get('/getData', function (req, res) {
    console.log(localArray);
  res.send( JSON.stringify(localArray) );
});
  
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`) 
});
