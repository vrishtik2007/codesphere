const express = require('express')
const router = express.Router()
const app = express()

const homeController = require ('./../controllers/homeController.js')
const javaController = require ('./../controllers/javaController.js')


router.get('/', homeController.home)
router.get('/java', javaController.java)

module.exports.router = router;
module.exports.app = app;
module.exports.express = express;
