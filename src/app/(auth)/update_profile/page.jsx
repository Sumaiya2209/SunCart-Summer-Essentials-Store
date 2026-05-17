'use client';

import { Button, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import React from 'react';
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";


const UpdateProfile = () => {

  const router = useRouter();

  const [successMessage, setSuccessMessage] =
    useState("");

  const [errorMessage, setErrorMessage] =
    useState("");

  const onSubmit = async (e) => {

    e.preventDefault();

    setSuccessMessage("");
    setErrorMessage("");

    const formData = new FormData(
      e.currentTarget
    );

    const userData = Object.fromEntries(formData.entries());

    await authClient.updateUser({
      image: userData.image,
      name: userData.name,
    })
      .then((response) => {
        setSuccessMessage(
          "Profile updated successfully!"
        );
        router.push("/profile");
      })

  }

  return (
    <div className="bg-[#f6f6f6] flex items-center justify-center p-20 pb-37">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
        <h1 className="text-3xl font-bold text-center mb-2"> Update Profile </h1>
        <p className="text-gray-500 text-center mb-8">Update your information </p>

        <Form
          className="flex flex-col gap-5"
          onSubmit={onSubmit}>
          <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 2) {
                return "Name must be at least 2 characters";
              }
              return null;
            }} >
            <Label className="font-medium text-gray-700">
              Name
            </Label>
            <Input
              placeholder="Enter your name"
              className="mt-1" />
            <FieldError />
          </TextField>

          <TextField
            name="image"
            type="url">
            <Label className="font-medium text-gray-700"> Profile Image</Label>
            <Input
              placeholder="Enter image URL"
              className="mt-1" />
            <FieldError />
          </TextField>

          {
            successMessage && (
              <p className="text-green-600 text-sm">
                {successMessage}
              </p>
            )
          }

          {
            errorMessage && (
              <p className="text-red-500 text-sm">
                {errorMessage}
              </p>
            )
          }

          <Button
            type="submit"
            className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl">
            Update Information
          </Button>
        </Form>

      </div>
    </div>
  );
};

export default UpdateProfile;