const express = require('express');
const app = express();
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const cors = require('cors');
const bodyParser = require('body-parser');

const port = 1337;


app.use(bodyParser.json());
app.use(cors());

// CORS
app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// ROUTES
// app.use('/user', user);

app.get('/', (request, response) => {
  response.send('Hello Neon!');
})

app.listen(port, () => {
  console.log(`App listening on port ${port}!`)
})
