import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'  


const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainrData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setCaptainrData({
      email: email,
      password: password,
    });

    console.log(captainData);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 flex h-screen  justify-between flex-col">
    <div>
      <img
        className="w-16 "
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnwMYH1XD2GttzuM0e34CUowGWvV9GPfcwWw&s"
        alt=""
      />
    </div>
    <form onSubmit={handleSubmit} className='mb-26'>
      <h3 className="text-xl mb-2 font-medium">What's your email</h3>
      <input
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        required
        type="email"
        placeholder="example@gmail.com"
        className="bg-[#eeeeee] mb-7 rounded border px-4 py-2 w-full text-lg placeholder:text-base"
      />
      <h3 className="text-xl mb-2 font-medium">What's your password</h3>
      <input
        required
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="password"
        placeholder="password"
        className="bg-[#eeeeee] mb-7 rounded border px-4 py-2 w-full text-lg placeholder:text-base"
      />

      <button className="bg-black text-white cursor-pointer mb-2 font-semibold rounded  px-4 py-2 w-full text-lg ">
        Login
      </button>
      <p className="text-center ">
        requirements and eligibilty?
        <Link to={"/Captain-signin"} className="text-blue-600">
        Create Rider Account 
        </Link>
      </p>
    </form>
    <Link
    to={"/Login"}
     className="bg-[#a79905] flex items-center justify-center text-white cursor-pointer mb-4 font-semibold rounded  px-4 py-2 w-full text-lg ">
      SignIn as User
    </Link>
  </div>
  )
}

export default CaptainLogin