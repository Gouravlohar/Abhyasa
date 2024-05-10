const express = require("express")

require("./db/config")
const BmSonsUser = require("./db/BmSonsUser")
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser');

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname)))
app.use(bodyParser.json());

app.post('/SignupBmsons', (req, res) => {
  const { username, email, password } = req.body;
  // if (!username || !email || !password) {
  //     console.log('username Email and password are required');
  // }
  // else if (username.includes(' ')) {
  //     return res.status(400).send('Username cannot contain spaces');
  // }
  // else{
  const user = new BmSonsUser({ username , email, password });
  user.save()
  .then(() => {
    res.status(200).send('Signup successful');
  })
  .catch(err => {
    res.status(500).send('Signup failed');
  });
  // }
  
});






app.listen(5000)
