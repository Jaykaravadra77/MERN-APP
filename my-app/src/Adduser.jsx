import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { addUser } from "./api";
import Layout from "./Layout/Layout";
import { getUserbyid } from "./api";
import { editUser } from "./api";

function Adduser() {
    let { id } = useParams();

    let [user, setuser] = useState({
        name: '',
        rollno: '',
        sem: ''
    })

    useEffect(()=>{
        if(id!==undefined){
            async function fetchdata(){
                let result =await getUserbyid(id);
                 setuser({name:result.data.name,rollno:result.data.rollno,sem:result.data.sem});
            }
            fetchdata()
        }
       
    },[id])

    async function subdata(event) {
        event.preventDefault();
      
        if (id===undefined) {
            try {
                let result = await addUser(user);
                setuser({ name: '', rollno: '', sem: '' });
            } catch (error) {
                console.log(error);
            }
        } else {
            console.log("Result fired");
            // console.log(id);
              
             let result1 =await editUser(user,id);
             console.log(result1);
            // try {
            //     let result = await editUser(id);
            //     setuser({ name: '', rollno: '', sem: '' });
            // } catch (error) {
            //     console.log(error);
            // }
        }



    }
    function handler(event) {
        let name = event.target.name;
        let value = event.target.value;
        setuser((preval) => {
            return { ...preval, [name]: value }
        })
    }

    function Formadd() {
        return (
            <form>
                name <input type="text" name="name" onChange={handler} value={user.name} /><br />
                rollno <input type="text" name="rollno" onChange={handler} value={user.rollno} /><br />
                sem <input type="text" name="sem" onChange={handler} value={user.sem} /><br />
                <button type="submit" onClick={subdata}>Add user</button>
            </form>
        )
    }
    return (
        <Layout className="container">
            {Formadd()}
        </Layout>
    )
}

export default Adduser;