const application = require('./application/application.js')
const app = application.app



app.listen(3000, () => {
    console.log("Application 'CodeSphere' is listening on port 3000")
}) 
