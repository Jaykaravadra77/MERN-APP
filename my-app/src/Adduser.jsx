import React, { useState } from "react";
import { addUser } from "./api";
import Layout from "./Layout/Layout";
 
function Adduser(){
    let [user,setuser]= useState({
        name:'',
        rollno:'',
        sem:''
    })
   async function subdata(event){
        event.preventDefault();
        try {
            let result = await addUser(user);
            setuser({name:'',rollno:'',sem:''});
        } catch (error) {
            console.log(error);
        }
        
         
    }
    function handler(event){
        let name = event.target.name;
        let value= event.target.value;
        setuser((preval)=>{
            return {...preval,[name]:value }
        })
    }

    function formadd(){
        return(
            <from>
             name <input type="text" name="name" onChange={handler} value={user.name}/><br/>
             rollno <input type="text" name="rollno" onChange={handler} value={user.rollno}/><br/>
             sem <input type="text" name="sem" onChange={handler} value={user.sem}/><br/>
             <button type="submit" onClick={subdata}>Add user</button>
            </from>
        )
    }
   return(
       <Layout className="container">
           {formadd()}
       </Layout>
   )
}

export default Adduser;