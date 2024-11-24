import React, { useState } from "react";
import { motion } from "framer-motion";


const Login = ({ change }) => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      alert("Invalid email format", "error");
      return;
    }
    if (password.length < 3) {
      alert("Password must be at least 3 characters", "error");
      return;
    }

    change(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="border-2 border-gray-400 p-20 rounded-lg">
        <form
          className="flex flex-col gap-10"
          onSubmit={submitHandler}
        >
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-emerald-600 border-2 outline-none rounded-full text-xl text-white required p-4 bg-transparent"
            placeholder="Enter your Email"
            required
          />
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-emerald-600 border-2 outline-none rounded-full text-xl text-white p-4 bg-transparent"
            placeholder="Enter your Password"
            required
          />
          <motion.button
            whileTap={{ scale: 0.6, duration: 0.01 }}
            className="text-white font-semibold bg-emerald-600 rounded-full text-xl p-3"
          >
            Login
          </motion.button>
        </form>
      </div>
n
    </div>
  );
};

export default Login;
