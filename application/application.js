const express = require('express')
const app = express()

const path = require('path')
const routes = require('./routes/routes.js')

app.use(express.json())
app.use(express.static(__dirname + './../public'));
app.use(express.static(__dirname + './../public/javascripts'));
app.use(express.static(__dirname + './../public/css'));
app.use(express.static(__dirname + './../public/fonts'));
app.use(express.static(__dirname + './../public/images'));
app.set('views',path.join(__dirname, './../views'));
app.use('/', routes.router)




exports.app = app
