const path = require('path');
const express = require('express');
const rootDirectory = require('../utilities/path');
const products = [];

//to use the code from this file in server.js
const router = express.Router();

router.get('/add-product', function(req, res){
    res.render('add-product', {
        pageTitle: "Add New Product",
        path: "/admin/add-product"
    })
    //res.sendFile(path.join(rootDirectory, 'views', 'add-product.html'));
});

router.post('/add-product', function(req, res){
    console.log(req.body.title);
    products.push({
        title: req.body.title,
        price: req.body.price,
        description: req.body.description
    });
    res.redirect('/');
});

exports.products = products;
exports.router = router;

//module.exports = router;