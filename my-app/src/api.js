import axios from "axios";

export let fetchusers=async(id)=>{
    id=id || '';
    let result =await axios.get(`http://127.0.0.1:8000/user/all`);
    return result;
}

export let addUser=async(user)=>{
    let result =await axios.post(`http://127.0.0.1:8000/user/create`,user);
    return result;
}

export let editUser=async(user,id)=>{
    let result =await axios.post(`http://127.0.0.1:8000/user/${id}`,user);
    return result;
}

export let getUserbyid=async(id)=>{
    let result =await axios.get(`http://127.0.0.1:8000/user/${id}`);
    return result;
}
