let express = require('express');
let app = express();
let cors = require('cors');
let cookieParser = require('cookie-parser')


require("./db/conn");

const Sdata = require('./models/Notes');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());



app.post("/user/create", async (req, res) => {
    let newuser = new Sdata(req.body);
    try {
        let result = await newuser.save();
        return res.json(result)
    } catch (error) {
        return res.status(400).json({
            err: error.message
        })
    }
})

app.get("/user/all", async (req, res) => {

    // if (req.params.id) {
    //     try {
    //         let result = await Sdata.find({ _id: req.params.id.toString() });
    //         return res.json(result)
    //     } catch (error) {
    //         return res.status(400).json({
    //             err: error.message
    //         })
    //     }
    // } else {
        try {
            let result = await Sdata.find();
            return res.json(result)
        } catch (error) {
            return res.status(400).json({
                err: error.message
            })
        }
    // }

})

app.post("/user/:id",async(req,res)=>{
    let id = req.params.id;
    console.log(id,req.body);
    try {
        console.log(req.body._id)
        let result = await Sdata.findByIdAndUpdate(id,req.body);
        console.log(result);
        // return res.json(result)
    } catch (error) {
        return res.status(400).json({
            err: error.message
        })
    }
})


app.get("/user/:id",async(req,res)=>{
    let id = req.params.id;
    try {
        let result = await Sdata.findById(id);
        return res.json(result)
    } catch (error) {
        return res.status(400).json({
            err: error.message
        })
    }
})



app.listen(8000, () => {
    console.log("App listen successfully");
})

