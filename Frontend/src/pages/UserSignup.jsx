import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../Context/UserContext";

const UserSignup = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Add state for error messages

  const { setUser } = useContext(UserDataContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/users/register`,
        newUser
      );

      if (response.status === 201 || response.status === 200) {
        const data = response.data;
        setUser(data.user);
        localStorage.setItem("token", data.token); // Store token in local storage
        navigate("/home");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      if (error.response && error.response.data.errors) {
        // Display validation errors from the backend
        setErrorMessage(
          error.response.data.errors.map((err) => err.msg).join(", ")
        );
      } else if (error.response && error.response.status === 409) {
        setErrorMessage("Email already registered.");
      } else if (error.response && error.response.status === 500) {
        setErrorMessage("Internal Server Error. Please try again later.");
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    }

    setEmail("");
    setPassword("");
    setfirstname("");
    setlastname("");
  };

  return (
    <div className="p-7 flex h-screen justify-between flex-col">
      <div>
        <img
          className="w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1200px-Uber_logo_2018.png"
          alt=""
        />
      </div>
      <form onSubmit={handleSubmit} className="mb-26">
        <h3 className="text-xl mb-2 mt-6 font-medium">What's your Name</h3>
        <div className="flex gap-4 mb-4">
          <input
            required
            type="text"
            placeholder="First Name"
            className="bg-[#eeeeee] rounded border px-4 py-2 w-1/2 text-lg placeholder:text-base"
            value={firstname}
            onChange={(e) => {
              setfirstname(e.target.value);
            }}
          />
          <input
            required
            type="text"
            placeholder="Last Name"
            className="bg-[#eeeeee] rounded border px-4 py-2 w-1/2 text-lg placeholder:text-base"
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
          required
          type="password"
          placeholder="password"
          className="bg-[#eeeeee] mb-5 rounded border px-4 py-2 w-full text-lg placeholder:text-base"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {errorMessage && (
          <p className="text-red-500 text-sm">{errorMessage}</p>
        )}
        <button className="bg-black text-white cursor-pointer mb-2 font-semibold rounded px-4 py-2 w-full text-lg">
          SignUp
        </button>
        <p className="text-center">
          Get Ride?{" "}
          <Link to={"/Login"} className="text-blue-600">
            Already SignIn
          </Link>
        </p>
      </form>
      <p className="text-[8px] leading-tight">
        Uber guidelines for drivers primarily focus on safety, respect, and
        adhering to platform rules. This includes adhering to traffic laws,
        respecting personal space, and reporting any incidents or safety
        concerns to Uber.
      </p>
    </div>
  );
};

export default UserSignup;
