//express handles routing and setting up the API
const express = require("express");
//handles Cross Origin Resource Sharing which just allows the program to use http API requests outside of the origin
const cors = require("cors");
//MongoDB js client. Constructs objects and schemas that mongoDB cluster can read
const mongoose = require("mongoose");

//Allows the use of .env variables like the port or the Atlas_Uri
require("dotenv").config();

//initializes the express app so we can have listeners and routers
const app = express();
//Gets the port which the program will run on. Will be used in express for listening
const port = process.env.PORT || 5000;

//line 3
app.use(cors());
//allows json decoding/parsing
app.use(express.json());

//Connect code to mongoose
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

//monitors mongoose connection
const connection = mongoose.connection
connection.once("open", ()=>{
    console.log('mongoDB connection successful')
})

//link route files that will handle extensions
const foodsRouter = require('./routes/foods')
const usersRouter = require('./routes/users')

//connect routes with express
app.use('/foods', foodsRouter)
app.use('/users', usersRouter)

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
