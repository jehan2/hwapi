import { Button  , Input, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Routers from './Routers'
function Login() {

    const navigate = useNavigate()
    const [names,setNames] = React.useState({fName:"",lName:""})

    const LogIn =()=>{
        if(names.fName.length=="" && names.lName.length==""){
            alert("required")
        }else
        {
            alert( navigate('/Home'))

        }
    }
    
    const Submit =()=>{
        LogIn()
        // navigate('/Home')
    }
  return (
    
    <div>
        <Input w={40} m={3} value={names.fName} onChange={r =>{setNames({...names, fName: r.target.value}) }}></Input><br/>
        <Input w={40} m={3} value={names.lName} onChange={e =>{setNames({...names, lName: e.target.value}) }}></Input><br/>
        <Button m={3} onClick={Submit}>Sub</Button>
        {/* <Text>{names.lName}</Text>
        <Text>{names.fName}</Text> */}
        {/* <p>{JSON.stringify(names)}</p> */}
    </div>
  )
}

export default Login;