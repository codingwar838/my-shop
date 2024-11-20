"use client";

import React, { useState } from "react";
import Container from "@/components/container/Container";
import Button from "@/components/button/Button";
import Image from "next/image";

// Tailwind css classes
const inputWrapperStyle = "flex flex-col gap-2";
const inputStyle = "border-b-2 outline-none focus-visible:border-b-black";
const errorStyle = "text-sm text-red-500";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  //Error Messages
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [addressError, setAddressError] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const errors = [];

    if (!name) {
      setNameError("Name is required");
      errors.push("Name is required");
    }

    if (!email) {
      setEmailError("Email is required");
      errors.push("Email is required");
    }

    if (!password) {
      setPasswordError("Password is required");
      errors.push("Password is required");
    }

    if (!confirmPassword) {
      setConfirmPasswordError("Enter password again");
      errors.push("Enter password again");
    }

    if (!phone) {
      setPhoneError("Phone number is required");
      errors.push("Phone number is required");
    }

    if (!address) {
      setAddressError("Home address is required");
      errors.push("Home address is required");
    }

    if (errors.length > 0) {
      return;
    }

    // Submitting data to the Server
    console.log("Submitting data to the backend...");
  };

  return (
    <main className="bg-secondary-400">
      <section className="w-full min-h-screen py-[120px] flex">
        <Container>
          <div className="flex gap-5 px-5 py-10 rounded-2xl shadow-2xl bg-white">
            <div className="flex-[2] hidden sm:flex justify-center items-center">
              <div className="relative w-[200px] h-[200px]">
                <Image fill src="/assets/registerGraphic1.svg" alt="" />
              </div>
            </div>
            <div className="flex-[3]">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h1 className="text-2xl md:text-4xl font-bold text-center">
                  Register <span className="text-accent-500">here</span>
                </h1>
                <div className={inputWrapperStyle}>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    onChange={(e) => setName(e.target.value)}
                    className={inputStyle}
                  />
                  {nameError && <p className={errorStyle}>{nameError}</p>}
                </div>
                <div className={inputWrapperStyle}>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputStyle}
                  />
                  {emailError && <p className={errorStyle}>{emailError}</p>}
                </div>
                <div className={inputWrapperStyle}>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                    className={inputStyle}
                  />
                  {passwordError && (
                    <p className={errorStyle}>{passwordError}</p>
                  )}
                </div>
                <div className={inputWrapperStyle}>
                  <input
                    type="password"
                    placeholder="Confirm password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={inputStyle}
                  />
                  {confirmPasswordError && (
                    <p className={errorStyle}>{confirmPasswordError}</p>
                  )}
                </div>
                <div className={inputWrapperStyle}>
                  <input
                    type="tel"
                    placeholder="Enter your phone"
                    onChange={(e) => setPhone(e.target.value)}
                    className={inputStyle}
                  />
                  {phoneError && <p className={errorStyle}>{phoneError}</p>}
                </div>
                <div className={inputWrapperStyle}>
                  <input
                    type="text"
                    placeholder="Enter your address"
                    onChange={(e) => setAddress(e.target.value)}
                    className={inputStyle}
                  />
                  {addressError && <p className={errorStyle}>{addressError}</p>}
                </div>
                <div>
                  <Button type="accent" size="big" rounded>
                    Register
                  </Button>
                </div>
              </form>
            </div>
            <div className="flex-[2] hidden md:flex justify-center items-center">
              <div className="relative w-[200px] h-[200px]">
                <Image fill src="/assets/registerGraphic2.svg" alt="" />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Register;
