const express  = require('express')
const mongoose = require( 'mongoose');
const app = express();
const PORT = process.env.PORT || 3008

//===============GET REQUEST=================///
app.use(express.static('client/build'));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
}

const MONGODB_URI =
process.env.MONGODB_URI || "mongodb://localhost/cheapo";
//===================DB Connection HERE==================
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Connected to Mongoose!");
});


//=========================PORT====================================//

app.listen(PORT, function() {
    console.log(`App running on port ${PORT}!`);
  });