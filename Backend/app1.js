let express = require('express');
let formidable = require('formidable');
let path = require('path');
let fs = require('fs');
let app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const uploadFolder = path.join(__dirname, "public", "files");
app.post("/api/uploadFile", (req, res) => {
    console.log("req placed");
    const form = formidable.IncomingForm();
    form.parse(req);
     form.on("fileBegin",(nm,file)=>{
         if(file.type="jpg"){
            file.path =path.join(uploadFolder,file.name);
         }else{
             throw new Error("ASDFsdaf");
         }
        
     })

     
      
     form.on("file",(nm,file)=>{
        console.log("File Uploded successfully");
    })



})
app.listen(8000, () => {
    console.log("App listen successfully");
})

