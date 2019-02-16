var express = require("express");
var path = require("path");
var apiRoutes = require("./app/routing/apiRoutes");
var bodyParser = require('body-parser');

const app = express();
var port = process.env.PORT || 8050;


app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
})

app.get('/survey', (req, res) => {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
})
apiRoutes(app);


app.listen(port, () => console.log(`Example app listening on port ${port}!`))