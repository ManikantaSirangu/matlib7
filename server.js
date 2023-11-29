const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));



app.get("/",function(req,res){
    res.render("index");
});


app.get('/output', (req, res) => {
  // res.sendFile(__dirname + '/output');
    res.render("output");
});

// Handle form submission
app.post('/output', (req, res) => {
  const { noun, verb, adjective, adverb, place } = req.body;

  // Your Mad Lib template
  const madLib = `Once upon a time, in a ${adjective} land, there were ${noun}s who loved to ${verb} ${adverb} around the ${place}.`;

  // Send back the filled Mad Lib
  res.send(madLib);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
