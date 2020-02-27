const express = require('express');
const bodyParser = require('body-parser');
//userRoutes - injecting code from shop.js
const userRoutes = require('./routes/shop');
//adminData - injecting code from admin.js
const adminData = require('./routes/admin');
const path = require('path');

const app = express();
app.set('view engine', 'ejs');  
app.set('views', 'views');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/admin', adminData.router);
app.use(userRoutes);



app.use(function(req, res, next){
    res.status(404).render('404', {
        pageTitle: "Oops! Page Not Found!",
        pageNotFound: "No Luck. Try Again.",
        myVariable: "Hello World!"
    
    });

    //res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));

    //res.status(404).send("Not found");
});



app.listen(8000, function(){
    console.log("Server is running on port 3000");
    //console.log("Path", path);
});


