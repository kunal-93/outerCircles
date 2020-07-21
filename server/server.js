const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
// const {swaggerOptions} = require('./helpers/swagger');

require('dotenv').config({path:"./config/keys.env"})

const app = express();
// use cors
app.use(cors())

// const swaggerDocs = swaggerJSDoc(swaggerOptions);
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.static("public"));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

//HandleBars middlewares
app.set('view engine', 'handlebars');

app.use((req, res, next) => {
    if(req.query.method == "PUT"){
        req.method="PUT";
    }
    else if(req.query.method == "DEL"){
        req.method="DELETE";
    }
    next();
});

// app.use(session({
//     secret: `${process.env.SECRET_KEY}`,
//     resave: false,
//     saveUninitialized: true,
//     // cookie: { secure: true }
//   }))

// app.use((req, res, next) => {
//     if(req.session != null){
//         res.locals.user = req.session.userInfo;
//     }
//     next();
// })

// load Controller routes
const generalController = require('./controllers/routes/general');
const userController = require('./controllers/routes/user');

// map controller to app object
app.use('/', generalController);
app.use('/user', userController);

mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> {
    console.log(`Connected to Database`);
})
.catch(err=>{
    console.log(`Error occured ${err}`);
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Web app is running on port : ${port}`);
});

module.exports = app;