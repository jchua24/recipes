const express = require('express');
const path = require('path');

//import router object
const router = require('./routes/routes')

const port = process.env.PORT || 8080; 


const app = express();

//allows for the parsing of request bodies 
app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({limit: '50mb', extended: true}))

//serve static files with proxy
app.use(express.static(path.join(__dirname, 'build')));



app.use(router);

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});


