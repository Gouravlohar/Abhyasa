const express = require("express")
const pythonBridge = require('python-bridge');

require("./db/config")
const BmSonsUser = require("./db/BmSonsUser")
const Examform = require("./db/Examform")
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser');

const app = express()
let python = pythonBridge();
app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname)))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/SignupBmsons', (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
      console.log('username Email and password are required');
  }
  else if (username.includes(' ')) {
      return res.status(400).send('Username cannot contain spaces');
  }
  else{
  const user = new BmSonsUser({ username , email, password });
  user.save()
  .then(() => {
    res.status(200).send('Signup successful');
  })
  .catch(err => {
    res.status(500).send('Signup failed');
  });
  }

  app.post('/Login', (req, res) => {
    const { email, password } = req.body;
    BmSonsUser.findOne({ email, password })
      .then(user => {
        if (user) {
          res.status(200).send('Login successful');
        } else {
          res.status(401).send('Invalid credentials');
        }
      })
      .catch(err => {
        res.status(500).send('Login failed');
      });
  });
  
});

app.post("/examForm", (req, res) => {
  const { studentName, studentNumber, studentGender, preferredMode } = req.body;

  const newForm = new Examform({
    studentName,
    studentNumber,
    studentGender,
    preferredMode,
  });

  newForm.save()
    .then(() => res.json({ success: true }))
    .catch(err => res.json({ success: false, error: err.message }));
});

app.get('/add', (req, res) => {
  python.ex`import sys`
  python.ex`sys.path.append('.')` 
  python.ex`from add import add`
  python`add()`.then(result => {
      // Close the Python bridge after getting the result
      python.end();
      res.send(result.toString());
  })
  .catch(err => {
      // Close the Python bridge if there's an error
      python.end();
      res.send(err.toString());
  })
  .catch(err => {
      // Handle any other errors
      console.error(err);
      res.status(500).send('An error occurred'); 
  });
});
app.get('/mouth_detect', (req, res) => {
  python.ex`import sys`
  python.ex`sys.path.append('.')` 
  python.ex`from mouth_opening_detector import mouth_detect`
  python`mouth_detect()`.then(result => {
      python.end();
      res.send(result.toString());
  })
  .catch(err => {
      python.end();
      res.send(err.toString());
  })
  .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred'); 
  });
});

app.get('/head_detect', (req, res) => {
  python.ex`import sys`
  python.ex`sys.path.append('.')` 
  python.ex`from head_pose_estimation import head_detect`
  python`head_detect()`.then(result => {
      python.end();
      res.send(result.toString());
  })
  .catch(err => {
      python.end();
      res.send(err.toString());
  })
  .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred'); 
  });
});


app.listen(5000)
