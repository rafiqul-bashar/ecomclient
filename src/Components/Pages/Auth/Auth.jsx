import { Heading } from '@chakra-ui/react'
import React from 'react'
import Login from './Login'
import Register from './Register'

export default function Auth() {
  const [register,setRegister] = React.useState(false)
  
  return (
    <div className='container'>
      <Heading textAlign='center' pb={3}><span className='text-green'> Login </span>or <span className='text-red'>Register</span></Heading>

      {
        register ? <div>
          <Register register={register} setRegister={setRegister}/>
        </div> : <div><Login register={register} setRegister={setRegister} /></div>
      }
      <div className='text-center'>
      
      </div>
    </div>
  )
}
