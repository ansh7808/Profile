import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const UserCard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((response) => setUser(response.data.results[0]))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-emerald-50 px-4">
      
      {/* Centered Heading */}
      <h1 className="text-3xl font-bold mb-6 text-center">Profile Details</h1>

      <div className="p-6 rounded-lg shadow-lg flex w-full max-w-4xl gap-10 items-center text-emerald-50 ">
        
        {/* Left Side: Image with Animation */}
        <motion.div 
          initial={{ x: -200, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 0.8, ease: "easeOut" }} 
          className="overflow-hidden hover:cursor-pointer"
        >
          <img
            src={user.picture.large}
            alt="Profile"
            className="w-64 h-64 rounded-full object-cover transition-all duration-300 hover:shadow-[0_0_20px_5px_white] hover:scale-110"
          />
        </motion.div>

        {/* Right Side: Details with Animation */}
        <motion.div 
          initial={{ x: 200, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 0.8, ease: "easeOut" }} 
          className="flex flex-col gap-2"
        >
          <p className="text-lg font-semibold ">Name: {user.name.title} {user.name.first} {user.name.last}</p>
          <p className="text-gray-300 font-fancy">Gender: {user.gender}</p>
          <p className="text-gray-300 font-fancy">Email: {user.email}</p>
          <p className="text-gray-300 font-fancy">Age: {user.dob.age}</p>
          <p className="text-gray-300 font-fancy">Phone: {user.phone}</p>
          <p className="text-gray-300 font-fancy">Location: {user.location.city}, {user.location.country}</p>
        </motion.div>

      </div>
    </div>
  );
};

export default UserCard;
