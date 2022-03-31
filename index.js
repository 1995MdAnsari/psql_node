let express = require("express");
const bodyParser = require("body-parser");
const pool = require("./db");
let app = express();
app.use(express.json());
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONs, PUT, PATCH, DELETE, HEAD"
    );
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Request-With,Content-Type,Access"
    );
    next();
});
app.listen(process.env.PORT || 3003, () =>console.log("Node app listening on port 3003"));

app.get(bodyParser.urlencoded({extended:true}));
// Insert data into database
app.post("/api/insert",async(req,res) =>{
    try{
        const name =req.body.name;
        const errors = req.body.countError;
        const data1 = JSON.stringify(name);
        // const date = req.body.date;
        // const time = req.body.time;
        const data = await pool.query("INSERT INTO quiz(name,countError) VALUES($1,$2)",
            [data1,errors]);
        // res.json(data.rows);
        res.status(200).json(data.rows);
        // res.send(data)
        
    }
    catch (err)
    {
        console.log(err.message);
    }
})

// update 


// delete 


//  get all data

// get a data
