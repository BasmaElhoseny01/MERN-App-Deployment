require("dotenv").config()

const express=require("express")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")

const cors=require("cors")

const app=express()
app.use(cors())

//import models
require("./modles/profile")

//connect 
mongoose.connect(process.env.MONOGDB_CONNECTION_STRING,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>{console.log("Mongo DB has been connected")})
.catch((err)=>{console.log(err)})


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

//import routes
require("./routes/profileRoute.js")(app);

const PORT=process.env.PORT || 5000;

const path=require("path")
const { application } = require("express")
app.use(express.static(path.resolve(__dirname,"./client/build")));

app.get("*",function(request,response){
    response.sendFile(path.resolve(__dirname,"./client/build","index.html"));
});


app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
});