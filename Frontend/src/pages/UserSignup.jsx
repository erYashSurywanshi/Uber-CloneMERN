import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";


const UserSignup = () => {
const [firstname, setfirstname] = useState("");
const [lastname, setlastname] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [userData, setUserData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData({
      FullNmae:{
        firstname:firstname,
        lastname:lastname
      },
      email: email,
      password: password
    })
    console.log(userData);
    setEmail('')
    setPassword('')
    setfirstname('') 
    setlastname('')
  }
  return (
    <div className="p-7 flex h-screen  justify-between flex-col">
      <div>
        <img
          className="w-16 "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnwMYH1XD2GttzuM0e34CUowGWvV9GPfcwWw&s"
          alt=""
        />
      </div>
      <form onSubmit={handleSubmit} className="mb-26">
        <h3 className="text-xl mb-2 mt-6 font-medium">What's your Name</h3>
        <div className="flex gap-4 mb-4">
          <input
            required
            type="name"
            placeholder="First Name"
            className="bg-[#eeeeee] rounded border px-4 py-2 w-1/2 text-lg placeholder:text-base"
            value={firstname}
            onChange={(e) => {
              setfirstname(e.target.value);
            }}
          />
          <input
            required
            type="name"
            placeholder="Last Name"
            className="bg-[#eeeeee]  rounded border px-4 py-2 w-1/2 text-lg placeholder:text-base"
            value={lastname}
            onChange={(e) => {
              setlastname(e.target.value);
            }}
         />
        </div>
        <h3 className="text-xl mb-2 font-medium">What's your email</h3>
        <input
          required
          type="email"
          placeholder="example@gmail.com"
          className="bg-[#eeeeee] mb-5 rounded border px-4 py-2 w-full text-lg placeholder:text-base"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <h3 className="text-xl mb-2 font-medium">What's your password</h3>
        <input
          type="password"
          placeholder="password"
          className="bg-[#eeeeee] mb-5 rounded border px-4 py-2 w-full text-lg placeholder:text-base"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button className="bg-black text-white cursor-pointer mb-2 font-semibold rounded  px-4 py-2 w-full text-lg ">
          SignUp
        </button>
        <p className="text-center ">
          get Ride? 
          <Link to={"/Login"} className="text-blue-600">
             Already SignIn
          </Link>
        </p>
      </form>
      <p className="text-[8px] leading-tight ">
        Uber guidelines for drivers primarily focus on safety, respect, and
        adhering to platform rules. This includes adhering to traffic laws,
        respecting personal space, and reporting any incidents or safety
        concerns to Uber.
      </p>
    </div>
  );
  }


export default UserSignup;
