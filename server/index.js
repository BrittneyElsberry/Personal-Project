require('dotenv').config()
const express = require('express')
    authCtrl = require('./controllers/authController')
    fbCtrl = require('./controllers/fbController')
    adminCtrl = require('./controllers/adminController')
    chartCtrl = require('./controllers/chartController')
const massive = require('massive')
const session = require('express-session')
const app = express();
// const bcrypt= require('bcryptjs');
const nodemailer = require('nodemailer')
const path = require('path')





const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

app.use(express.json());

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 30 * 24 * 60 * 60 * 1000}
    // cookie: {maxAge: 1000 * 60 * 60 * 24}
   
   }))
   
   
   massive({
       connectionString: CONNECTION_STRING,
       ssl:{rejectUnauthorized: false},
    //    transporter: transporter
    
    
    
    })
       .then((db)  => {
           app.set('db', db)
        //    app.set('transporter', transporter)
           console.log('db connected')
           app.listen(SERVER_PORT, ()=> console.log(`running on ${SERVER_PORT}`));
       })
   




//User Auth endpoints

app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.get('/me', authCtrl.getUser)
app.post('/logout', authCtrl.logout)


//User endpoints

// app.get('https://dummyapi.io/data/api/', userCtrl.getFB)


//Feedback endpoints---------------------------------

app.get('/myfeedback/:user_id', fbCtrl.readFB)
app.get('/mycomments/:feedback_id', fbCtrl.readComments)
app.post('/myfeedback/submit', fbCtrl.createFB)
app.post('/myfeedback/anonymous', fbCtrl.createAnonymous)
app.put(`/myfeedback/:id`, fbCtrl.updateFB)
app.delete(`/myfeedback/:id`, fbCtrl.deleteFB)
app.post(`/confirmationemail/`, fbCtrl.confirmationEmail)

//Admin team endpoints--------------------------------------------------

app.get(`/managerview/myteam`, adminCtrl.retrieveTeam)
app.get(`/myteamfeedback/:user_id`, adminCtrl.retrieveIndividualFB) //change this to user_id
// app.get(`/managercommentlist/:feedback_id`, adminCtrl.retrieveComments)
app.post(`/managercomment/`, adminCtrl.addComment)


// Chart endpoints ---------------------------------------------------

//category 

app.get(`/chart1`, chartCtrl.chartData1)
app.get(`/chart2`, chartCtrl.chartData2)
app.get(`/chart3`, chartCtrl.chartData3)
app.get(`/chart4`, chartCtrl.chartData4)


//comments 
app.get(`/comment1`, chartCtrl.commentData1)
app.get(`/comment2`, chartCtrl.commentData2)
app.get(`/comment3`, chartCtrl.commentData3)
app.get(`/comment4`, chartCtrl.commentData4)



//Website hosting

app.use(express.static(__dirname + '/../build'))

app.get('*', (req, res)=> {
    res.sendFile(path.join(__dirname, '../build/index.html'))
})

