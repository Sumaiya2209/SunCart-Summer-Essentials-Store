'use client';

import { Check } from "@gravity-ui/icons";
import { Button, Checkbox, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterPage = () => {

   const [isPasswordShown, setIsPasswordShown] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      name: userData.name,
      email: userData.email, 
      password: userData.password, 
      image: userData.image,
      callbackURL: "/",
    });

    if(error) {
      alert("Registration failed: " + error.message);
    }
    if (data) {
      alert("Registration successful! Please check your email to verify your account.");
    }
  };

  return (
    <div className=" bg-[#f6f6f6] flex items-center justify-center px-4 py-14 pb-19">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
          <div className="flex flex-col items-center pt-8">
            <Image
              src={logo}
              alt="SunCart Logo"
              loading="eager"
              className="w-36 object-contain"
            />
            <p className=" text-gray-500 mt-1">
              Register to continue shopping
            </p>
          </div>

          <div className="px-8 py-8">
            <Form
              className="flex flex-col gap-5"
              onSubmit={onSubmit} >
              <TextField
                isRequired
                name="name"
                type="text"
                validate={(value) => {
                  if (value.length < 2) {
                    return "Name must be at least 2 characters";
                  }
                  return null;
                }}>
                <Label className="font-medium text-gray-700">Name</Label>
                <Input
                  placeholder="Enter your name"
                  className="mt-1 w-full" />
                <FieldError />
              </TextField>

              <TextField
                isRequired
                name="email"
                type="email"
                validate={(value) => {
                  if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                  ) {
                    return "Please enter a valid email";
                  }
                  return null;
                }}>
                <Label className="font-medium text-gray-700">Email</Label>
                <Input
                  placeholder="Enter your email"
                  className="mt-1 w-full" />
                <FieldError />
              </TextField>

              <TextField
                name="image"  
                type="url"
                >
                <Label className="font-medium text-gray-700">Profile Image  </Label>
                <Input        
                  placeholder="Enter image"
                  className="mt-1 w-full" />
                <FieldError />
              </TextField>
               
              <TextField
                isRequired
                minLength={8}
                name="password"
                type={isPasswordShown ? "text" : "password"}
                validate={(value) => {
                  if (value.length < 8) {
                    return "Password must be at least 8 characters";
                  }
                  if (!/[A-Z]/.test(value)) {
                    return "Must contain one uppercase letter";
                  }
                  if (!/[0-9]/.test(value)) {
                    return "Must contain one number";
                  }
                  return null;
                }} >
                <Label className="font-medium text-gray-700">Password</Label>
                <Input
                  placeholder="Enter your password"
                  className="mt-1 w-full" />
                  <span className="relative left-85 bottom-8 cursor-pointer" onClick={() => setIsPasswordShown(!isPasswordShown)}>
                  {isPasswordShown ? <FaEye /> : <FaEyeSlash />}
                </span>
                <FieldError />
              </TextField>
              
              <Button type="submit"
                className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all duration-300 mt-2">Register Now
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;