const express = require('express')

const routes = require('./routes')

const bodyParser  = require('body-parser')

const cors  = require('cors')


const app = express()

app.use(bodyParser.json());
// Soporte para bodies codificados
app.use(bodyParser.urlencoded({ extended: true })); 

app.set('port', process.env.PORT || 9000)


// middlewares -------------------------------------
app.use(express.json())
app.use(cors())


// routes -------------------------------------------
app.get('/', (request, response)=>{
    res.send('Welcome to my API')
})
app.use('/api', routes)

// server running -----------------------------------
app.listen(app.get('port'), ()=>{
    console.log('server running on port', app.get('port'))
})