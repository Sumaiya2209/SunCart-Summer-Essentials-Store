'use client';
import { Button, FieldError, Form, Input,  Label,  TextField } from "@heroui/react";
import Image from "next/image";
import logo from "@/assets/logo.png";


const LoginPage = () => {

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    alert(`Form submitted with: ${JSON.stringify(data, null, 2)}`);
  };

  return (

    <div className=" bg-[#f6f6f6] flex items-center justify-center px-4 py-15 pb-34">

      <div className="w-full max-w-md">

        <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">

          <div className="flex flex-col items-center pt-8">
            <Image
              src={logo}
              alt="SunCart Logo"
              loading="eager"
              className="w-36 object-contain"
            />
            <p className="text-gray-500 mt-1">
              Login to continue shopping
            </p>
          </div>

          <div className="px-8 py-8">
            <Form
              className="flex flex-col gap-5"
              onSubmit={onSubmit} >
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
                  className="mt-1"/>
                <FieldError />
              </TextField>
              <TextField
                isRequired
                minLength={8}
                name="password"
                type="password"
                validate={(value) => {
                 
                }} >
                <Label className="font-medium text-gray-700">Password</Label>
                <Input
                  placeholder="Enter your password"
                  className="mt-1"/>
                <FieldError />
              </TextField>
              <Button type="submit"
                className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all duration-300 mt-2">Login Now
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

