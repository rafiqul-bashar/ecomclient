import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

export default function Register({ setRegister }) {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [cpassword, setcPassword] = React.useState('')
  const [address, setAddress] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  const handleSubmit = (e) => {
    e.preventDefault()
    const user={name,email,password,address,phone}
    console.log(user);
  }
  
  return (
    <div className=' md:w-1/2 mx-auto my-10 p-8 border-2 border-grey'>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <Input value={name} onChange={(e) => setName(e.target.value)} placeholder='Full Name' />
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
        <InputGroup size='md'>
          <Input
            value={cpassword} onChange={(e) => setcPassword(e.target.value)}
            pr='4.5rem'
            type={show ? 'text' : 'password'}
            placeholder='Confirm password'
          />
          <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='lg' variant="ghost" onClick={handleClick}>
              {show ? <AiFillEyeInvisible /> : <AiFillEye />}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Input value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Address' />
        <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Phone' />
        <button type='submit' className='w-full text-white bg-red/90 py-1 font-bold tracking-wider text-lg'>Register</button>
      </form>
      <p className='text-center cursor-pointer mt-3 font-semibold text-lg' onClick={() => setRegister(false)} >Already Registered? <span className='underline text-green'>  Login Here </span></p>
    </div>
  )
}
