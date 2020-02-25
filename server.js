const express = require('express');
const bodyParser = require('body-parser');
//userRoutes - injecting code from shop.js
const userRoutes = require('./routes/shop');
//adminData - injecting code from admin.js
const adminData = require('./routes/admin');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/admin', adminData);
app.use(userRoutes);



app.use(function(req, res, next){
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));

    //res.status(404).send("Not found");
});



app.listen(3000, function(){
    console.log("Server is running on port 3000");
    //console.log("Path", path);
});


