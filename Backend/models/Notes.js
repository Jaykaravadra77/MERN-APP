let mongoose =require('mongoose');

let notesSchema = new mongoose.Schema({
    name:{
        type:String
    },
    rollno:{
        type:String
    },
    sem:{
        type:String
    }
 
})

let Sdata= mongoose.model("sdata",notesSchema);

module.exports = Sdata;