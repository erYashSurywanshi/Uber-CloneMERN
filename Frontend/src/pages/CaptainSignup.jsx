import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useCaptain } from "../Context/CaptainContext"; // Import the custom hook
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CaptainSignup = () => {
  const navigate = useNavigate();
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const { setCaptain } = useCaptain(); // Use the custom hook to access context

  const handleSubmit = async (e) => {
    e.preventDefault();
    const captainData = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/captains/register`,
        captainData
      );

      if (response.status === 201 || response.status === 200) {
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem("token", data.token);
        navigate("/captain-home"); // Redirect to captain home on success
      }
    } catch (error) {
      console.error("Error during signup:", error);
      if (error.response) {
        console.error("Server Response:", error.response.data); // Log server response
      } else {
        console.error("Error Message:", error.message);
      }
    }

    setEmail("");
    setPassword("");
    setfirstname("");
    setlastname("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleCapacity("");
    setVehicleType("");
  };

  return (
    <div className="p-4 h-screen flex flex-col">
      <div className="mb-2">
        <img
          className="w-12"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnwMYH1XD2GttzuM0e34CUowGWvV9GPfcwWw&s"
          alt=""
        />
      </div>
      <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto">
        <h3 className="text-lg mb-1 font-medium">What's your Name</h3>
        <div className="flex gap-2 mb-2">
          <input
            required
            type="text"
            placeholder="First Name"
            className="bg-[#eeeeee] rounded border px-3 py-1 w-1/2 text-base placeholder:text-sm"
            value={firstname}
            onChange={(e) => {
              setfirstname(
                e.target.value.charAt(0).toUpperCase() +
                  e.target.value.slice(1).toLowerCase()
              );
            }}
          />
          <input
            required
            type="text"
            placeholder="Last Name"
            className="bg-[#eeeeee] rounded border px-3 py-1 w-1/2 text-base placeholder:text-sm"
            value={lastname}
            onChange={(e) => {
              setlastname(
                e.target.value.charAt(0).toUpperCase() +
                  e.target.value.slice(1).toLowerCase()
              );
            }}
          />
        </div>
        <h3 className="text-lg mb-1 font-medium">What's your email</h3>
        <input
          required
          type="email"
          placeholder="example@gmail.com"
          className="bg-[#eeeeee] mb-2 rounded border px-3 py-1 w-full text-base placeholder:text-sm"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value.toLowerCase());
          }}
        />
        <h3 className="text-lg mb-1 font-medium">What's your password</h3>
        <input
          type="password"
          placeholder="password"
          className="bg-[#eeeeee] mb-2 rounded border px-3 py-1 w-full text-base placeholder:text-sm"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <div className="flex gap-2">
          <div className="w-1/2">
            <h3 className="text-lg mb-1 font-medium">Vehicle Color</h3>
            <input
              required
              type="text"
              placeholder="Vehicle Color"
              className="bg-[#eeeeee] mb-2 rounded border px-3 py-1 w-full text-base placeholder:text-sm"
              value={vehicleColor}
              onChange={(e) =>
                setVehicleColor(
                  e.target.value.charAt(0).toUpperCase() +
                    e.target.value.slice(1).toLowerCase()
                )
              }
            />
          </div>
          <div className="w-1/2">
            <h3 className="text-lg mb-1 font-medium">Vehicle Plate</h3>
            <input
              required
              type="text"
              placeholder="Vehicle Plate Number"
              className="bg-[#eeeeee] mb-2 rounded border px-3 py-1 w-full text-base placeholder:text-sm"
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value.toUpperCase())}
            />
          </div>
        </div>

        <div className="flex gap-2 mb-3">
          <div className="w-1/2">
            <h3 className="text-lg mb-1 font-medium">Vehicle Capacity</h3>
            <input
              required
              type="number"
              placeholder="Capacity"
              className="bg-[#eeeeee] rounded border px-3 py-1 w-full text-base placeholder:text-sm"
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
            />
          </div>
          <div className="w-1/2">
            <h3 className="text-lg mb-1 font-medium">Vehicle Type</h3>
            <select
              required
              className="bg-[#eeeeee] rounded border px-3 py-1 w-full text-base"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
            >
              <option value="">Select Type</option>
              <option value="car">Car</option> {/* Updated to match backend enum */}
              <option value="bike">Bike</option> {/* Updated to match backend enum */}
              <option value="auto">Auto</option> {/* Updated to match backend enum */}
              <option value="moto">Auto</option> {/* Updated to match backend enum */}

            </select>
          </div>
        </div>

        <button className="bg-black text-white cursor-pointer mb-2 font-semibold rounded px-3 py-1 w-full text-base">
          SignUp
        </button>
        <p className="text-sm text-center">
          get Ride?
          <Link to={"/Captain-login"} className="text-blue-600">
            Already SignIn
          </Link>
        </p>
      </form>
      <p className="text-[8px] leading-tight mt-2">
        Uber guidelines for drivers primarily focus on safety, respect, and
        adhering to platform rules.
      </p>
    </div>
  );
};

export default CaptainSignup;
