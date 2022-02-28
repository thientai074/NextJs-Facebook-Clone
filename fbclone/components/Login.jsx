import {signIn } from 'next-auth/client'
const Login = () => {
  return (
    <div className='grid place-items-center mt-5'>
        <h1 className='text-blue-500 text-7xl mb-4 mt-6'>Welcome to Facebook Clone</h1>
        <img src="https://links.papareact.com/t4i" height={400} width={400}/>
        <h1 onClick={signIn} className='p-5 bg-blue-500 rounded-full text-white
        text-center cursor-pointer mt-6'>Login with Github</h1>
    </div>
  )
}

export default Login