import { useNavigate } from 'react-router-dom'
import React, {useState , useEffect} from 'react';
import axios from "axios";
import Get from './Get';
import Routers from './Routers'
function Login() {

    const navigate = useNavigate()

    // const [names,setNames] = React.useState({fName:"",lName:""})
    const[email, setEmail]= useState()
    const[pass, setPass]= useState()
    let url="https://6362424b66f75177ea2a998e.mockapi.io/ToDo"

    const postData= ()=>{
        axios.post(url,{
            email,
            pass
        }).then(res=>{
            console.log(res);
            
        })
        navigate('/Get')
    }
  return (
    <div className='log'>
       
       <input placeholder='email' onChange={e=> {setEmail(e.target.value)}}></input><br/>
       <input placeholder='pass' onChange={e=> {setPass(e.target.value)}}></input><be/>
<br/>
       <button onClick={postData}>
        Login</button><br/>
       </div>
  )
}

export default Login;




































// import { Button  , Input, Text } from '@chakra-ui/react'
// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// import Routers from './Routers'
// function Login() {

//     const navigate = useNavigate()
//     const [names,setNames] = React.useState({fName:"",lName:""})

//     const LogIn =()=>{
//         if(names.fName.length=="" && names.lName.length==""){
//             alert("required")
//         }else
//         {
//             alert( navigate('/Home'))

//         }
//     }
    
//     const Submit =()=>{
//         LogIn()
//         // navigate('/Home')
//     }
//   return (
    
//     <div>
//         <Input w={40} m={3} value={names.fName} onChange={r =>{setNames({...names, fName: r.target.value}) }}></Input><br/>
//         <Input w={40} m={3} value={names.lName} onChange={e =>{setNames({...names, lName: e.target.value}) }}></Input><br/>
//         <Button m={3} onClick={Submit}>Sub</Button>
//         {/* <Text>{names.lName}</Text>
//         <Text>{names.fName}</Text> */}
//         {/* <p>{JSON.stringify(names)}</p> */}
//     </div>
//   )
// }

// export default Login;