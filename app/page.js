"use client";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await res.json();
    setMessage(data.message);
  };
  return (
    <main className="bg-black h-screen text-gray-500  ">
      <form
        className="flex flex-col justify-center items-center gap-6 text-lg"
        onSubmit={handleSubmit}
      >
        <h1 className="text-4xl font-bold text-orange-500 border-b-4 border-orange-600 pb-3 p-5">
          Registration with your account
        </h1>
        <div className="p-2">
          <input
            type="text"
            placeholder="First name"
            name="firstName"
            value={firstName}
            className="p-3 rounded-3xl mx-3 w-48 "
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Last name"
            name="lastName"
            value={lastName}
            className="w-48 rounded-3xl p-3"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>
        <input
          type="text"
          placeholder="Enter your Username"
          name="username"
          value={username}
          className="w-96 p-3"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          name="email"
          className="w-96 p-3"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Enter your Password"
          name="password"
          value={password}
          className="w-96 p-3"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Enter your Confirmation Password"
          name="confirmPassword"
          value={confirmPassword}
          className="w-96 p-3"
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
        <button
          type="submit"
          className="bg-orange-600 p-3 rounded-3xl w-96 font-bold text-white"
        >
          Sign Up
        </button>
        <p>{message}</p>
        <p>
          Already have an account ?
          <Link href="/login" className="text-blue-600 font-semibold">
            Sign in
          </Link>
        </p>
      </form>
    </main>
  );
}
