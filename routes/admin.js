const path = require('path');
const express = require('express');
const rootDirectory = require('../utilities/path');

//to use the code from this file in server.js
const router = express.Router();

router.get('/add-product', function(req, res){
    
    res.sendFile(path.join(rootDirectory, 'views', 'add-product.html'));
});

module.exports = router;