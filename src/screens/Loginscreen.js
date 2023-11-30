import React from 'react'
import { useState,useeffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

 function Loginscreen() {
  const history=useNavigate();
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');
  const Login=async (e)=>{
    e.preventDefault();
    const user={
      email,
      password
    }
    try {
    //  const res = await fetch('/login',{
    //   method:"POST",
    //   headers:{
    //     "Content-type":"Aplication/json"
    //   },body:JSON.stringify()({
    //     email,
    //     password
    //   })
    //  });
    //  const data=res.json();
    //  if(res.status === 400 || !data){
    //   window.alert("credenatial wrong");
    //  }else{
    //   window.alert("login successfull")
    //   history("/home");
    //  }
      const result= await axios.post('/api/users/login',user).data;
      if(result){
        window.alert("wrong credential")
      }else{
        window.alert("login successfull")
        history("/home");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>   
          <div className="row justify-content-center mt-5">
            <div className="col-md-5 mt-5">
               <div className='bs'>
                  <h1>Login</h1>
                  <form method="POST">
                  <input type="text" className="form-control" placeholder="email" value={email} 
                  onChange={(e)=>{setemail(e.target.value)}}/>
                  <input type="text" className="form-control" placeholder="password" value={password} 
                  onChange={(e)=>{setpassword(e.target.value)}}/>
                  <button className='btn btn-primary mt-3' onClick={Login}>Login</button>
                  </form>
               </div>

            </div>
          </div>
   </div>
  )
}

export default Loginscreen