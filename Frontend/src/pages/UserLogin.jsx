import React, { useContext, useState } from "react"; // Added useContext
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../Context/UserContext";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const { setUser } = useContext(UserDataContext); // Fixed UserContext usage

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/users/login`,
        newUser
      );

      if (response.status === 200) {
        // Ensure correct status code is checked
        const data = response.data;

        setUser(data.user);
        localStorage.setItem("token", data.token); // Store token in local storage
        navigate("/home"); // Navigate to the home page
      }
    } catch (error) {
      console.error("Error during signup:", error); // Log full error details
    }
    setEmail("");
    setPassword("");
  };
  return (
    <div className="p-7 flex h-screen  justify-between flex-col">
      <div>
        <img
          className="w-16 "
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1200px-Uber_logo_2018.png"
          alt=""
        />
      </div>
      <form onSubmit={handleSubmit} className="mb-21">
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
          {" "}
          New Here?{" "}
          <Link to={"/Signin"} className="text-blue-600">
            Create Your Account First Buddy!
          </Link>
        </p>
      </form>
      <Link
        to={"/Captain-login"}
        className="bg-[#10b461] flex items-center justify-center text-white cursor-pointer mb-6 font-semibold rounded  px-4 py-2 w-full text-lg "
      >
        Login as Captain
      </Link>
    </div>
  );
};

export default UserLogin;
