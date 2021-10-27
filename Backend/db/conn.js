let mongoose = require('mongoose');
 
    let url =`mongodb+srv://emall:emall@cluster0.fynsp.mongodb.net/second?retryWrites=true&w=majority`;
    async function connect(){
      try {
          let result =await mongoose.connect(url);
        //   console.log(result);
        console.log("Succesfully connected");
      } catch (error) {
          
        console.log(error);
      }
    }
    connect();
    
 

 