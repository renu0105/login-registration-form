"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div className="bg-black h-screen text-gray-200">
      <form
        className="flex flex-col items-center gap-10 text-lg "
        onSubmit={handleSubmit}
      >
        <h className="text-blue-700 text-4xl font-bold border-b-4  border-blue-600 w-72 pb-4 mt-10">
          Login
        </h>

        <input
          type="text"
          placeholder="Username"
          className="p-3 w-72 bg-black border-b-2  "
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 w-72 bg-black border-b-2 "
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="rounded-3xl w-72 font-bold bg-blue-700 p-3 "
        >
          Login
        </button>
        <p>{message}</p>

        <p>
          Does not have an account ?{" "}
          <Link href="/registration" className="text-blue-700">
            Create Account
          </Link>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
