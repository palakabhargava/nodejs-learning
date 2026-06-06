const express = require("express");
const path = require("path");
const multer = require("multer");
const logger = require("morgan");
const router = express.Router();
const upload = multer({dest:"./public/uploads"});
const app = express();
const port = 3001;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/static",express.static(path.join(__dirname,"public")));
const loggermiddleware=(req,res,next)=>{
    console.log(`${new Date()}---Request [${req.method}] [${req.url}]`)
    next();
}
app.use(loggermiddleware);
app.use(logger("combined"));
app.use("/api/users",router);
const fakeauth=(req,res,next)=>{
    const authstatus=true;
    if(authstatus){
        console.log("User authenticated",authstatus);
        next();
    }else{
        res.status(401);
        throw new Error("User not authenticated");
    }
}
router.use(fakeauth);
router.route("/").get(getUsers).post(createUser);
function getUsers(req,res){
    res.json({message: "get all users "});
}
function createUser(req,res){
    console.log("this is the request body received from the client:",req.body);
    res.json({message: "create new user!"});
}
const errorhandler=(err,req,res,next)=>{
    const statuscode=res.statusCode?res.statusCode:500;
    res.status(statuscode);
    switch (statuscode){
        case 401:
            res.json({title:"unauthorized",message:err.message});
            break;
        case 404:
            res.json({title:"not found",message:err.message});
            break;    
        case 500:
            res.json({title:"internal server error",message:err.message});
            break;
        default:
            break;
    }

};
app.post("/upload",upload.single("image"),(req,res)=>{
    console.log(req.file,req.body);
    res.send(req.file);
},(err,req,res,next)=>{
    res.status(400).send({error:err.message});
}
)
app.get("/", (req, res) => {
    res.json({message: "Hello World!"});
});
app.get("/users", (req, res) => {
    res.json({message: "Hello Users!"});
});
app.get("/users/:id", (req, res) => {
    res.json({message: `Hello User ${req.params.id}!`});
});
app.post("/users/", (req, res) => {
    res.json({message: "create user!"});
});
app.put("/users/:id", (req, res) => {
    res.json({message: `update user ${req.params.id}!`});
});
app.delete("/users/:id", (req, res) => {
    res.json({message: `delete user ${req.params.id}!`});
});
app.use(errorhandler);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});