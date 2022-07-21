
import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

export default function Login({ setRegister }) {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const user={email,password}
    console.log(user);
  }
  

return (
  <div className=' md:w-1/2 mx-auto my-10 p-8 border-2 border-grey'>
    <form onSubmit={handleSubmit} className='space-y-4'>
      <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' />
      <InputGroup size='md'>
        <Input
          value={password} onChange={(e) => setPassword(e.target.value)}
          pr='4.5rem'
          type={show ? 'text' : 'password'}
          placeholder='Enter password'
        />
        <InputRightElement width='4.5rem'>
          <Button h='1.75rem' size='lg' variant="ghost" onClick={handleClick}>
            {show ? <AiFillEyeInvisible /> : <AiFillEye />}
          </Button>
        </InputRightElement>
      </InputGroup>
      <button type='submit' className='w-full text-white bg-green-400/90 py-1 font-bold tracking-wider text-lg'>Login</button>
    </form>
    <p className='text-center cursor-pointer mt-3 font-semibold text-lg' onClick={() => setRegister(true)} >New User?<span className='underline text-red'> Register Here </span></p>
  </div>
)
}
