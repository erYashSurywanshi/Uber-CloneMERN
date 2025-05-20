import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="bg-cover bg-bottom bg-[url(https://images.unsplash.com/photo-1527603815363-e79385e0747e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRyYWZmaWMlMjBsaWdodHxlbnwwfHwwfHx8MA%3D%3D)] pt-8 h-screen flex justify-between flex-col w-full ">
        <img
          className="w-18 ml-9"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1200px-Uber_logo_2018.png"
          alt=""
        />
        <div className="bg-white py-4 pb-7 px-4">
          <h2 className="text-3xl font-bold">Get Started with Uber</h2>
          <Link to="/Login" className="flex iteams-center justify-center w-full bg-black text-white py-3 rounded mt-5">Continue    </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
