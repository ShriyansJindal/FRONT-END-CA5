import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  let [signup, setSignup] = useState(false);
  let {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  let onSubmit = (el) => {
    setSignup(true);
    console.log(el);
    notify();
    setTimeout(() => {
      navigate("/");
      
    }, 2000);
  };
  let password = watch("Password", " ");
  const notify = () => toast("Registration Successfull !");
  return (
    <div className="px-5 py-3">
      <h1 className="text-red-400 font-bold text-[30px]">
        <Link to="/">Kalvium</Link>
      </h1>
      <ToastContainer position="top-center" />
      <h1 className="text-[40px] text-center">CREATE ACCOUNT</h1>
      <form
        action=""
        className="form border-2 box-border mt-10 text-center border-black w-[35%]  m-auto px-10 py-5 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="m-2 my-5">
          <input
            type="text"
            placeholder="Enter your name"
            className="border-2 border-black w-[90%] m-0 px-3 py-2 "
            name="fullName"
            {...register("fullName", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name must be more than 3 characters",
              },
              maxLength: {
                value: 30,
                message: "Name should be less then 30 characters",
              },
            })}
          />
          {errors.fullName && (
            <p className="text-red-600 text-left mx-6 mb-3">
              {errors.fullName.message}
            </p>
          )}
        </div>
        <div className="m-2 my-5">
          <input
            type="text"
            placeholder="Enter your email"
            className="border-2 border-black w-[90%] m-0 px-3 py-2 "
            name="Email"
            {...register("Email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@+.*$/i,
                message: "Invalid Email @ is required",
              },
            })}
          />
          {errors.Email && (
            <p className="text-red-600 text-left mx-6 mb-3">
              {errors.Email.message}
            </p>
          )}
        </div>

        <div className="m-2 my-5">
          <input
            type="text"
            placeholder="Enter your password"
            className="border-2 border-black w-[90%] m-0 px-3 py-2"
            name="Password"
            {...register("Password", {
              required: "Password is required",
              minLength: {
                value: 10,
                message: "Password should be more than 10 character",
              },
              pattern: {
                value: /^.*[*.!@$%^&(){}[:;<>,.?/~_+-=|\]].*$/,
                message: "Atleast one special character needed",
              },
            })}
          />
          {errors.Password && (
            <p className="text-red-600 text-left mx-6 mb-3">
              {errors.Password.message}
            </p>
          )}
        </div>

        <div className="m-2 my-5">
          <input
            type="text"
            className="border-2 border-black w-[90%] m-0 px-3 py-2"
            placeholder="Confirm your password"
            name="RePassword"
            {...register("RePassword", {
              required: "This field is required",
              validate: (value) => value == password || "Password do not match",
            })}
          />
          {errors.RePassword && (
            <p className="text-red-600 text-left mx-6 ">
              {errors.RePassword.message}
            </p>
          )}
        </div>
        <div>
          <input
            type="checkbox"
            className="mx-2"
            name="Terms"
            {...register("Terms", { required: "This is required" })}
          />
          I agree all statements in Terms of service
          {errors.Terms && (
            <p className="text-red-600 text-left mx-6">
              {errors.Terms.message}
            </p>
          )}
        </div>
        <br />

        <input
          className="submitbtn border-2 border-black py-2 px-4"
          type="submit"
          value="Sign up"
        />
      </form>
    </div>
  );
};

export default Register;
