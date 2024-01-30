import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./Forms.css"

const Register = () => {
// storing data from the user
  let [userdata,setUserdata] = useState({
    fullName:"",
    Email:"",
    Password:"",
    RePassword:""
  })

  let {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
//on submit function
  let onSubmit = (el) => {
    setUserdata({...userdata,fullName:el.fullName, Email:el.Email, Password:el.Password,RePassword:el.RePassword})
    console.log(el)
    notify();
  };
  // console.log(userdata)

  let password = watch("Password", " ");
  const notify = () => toast("Registration Successfull !");

  
  return (
    <div className=" form-container">
      <h1>
        <Link to="/" className="logo-reg">Kalvium Books</Link>
      </h1>
      <ToastContainer position="top-center" />
      <h1 className="create">CREATE ACCOUNT</h1>
      <form
        className="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter your name"
            className="input "
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
            <p className="error">
              {errors.fullName.message}
            </p>
          )}
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter your email"
            className="input "
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
            <p className="error">
              {errors.Email.message}
            </p>
          )}
        </div>

        <div className="input-container">
          <input
            type="text"
            placeholder="Enter your password"
            className="input"
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
            <p className="error">
              {errors.Password.message}
            </p>
          )}
        </div>

        <div className="input-container">
          <input
            type="text"
            className="input"
            placeholder="Confirm your password"
            name="RePassword"
            {...register("RePassword", {
              required: "This field is required",
              validate: (value) => value == password || "Password do not match",
            })}
          />
          {errors.RePassword && (
            <p className="error ">
              {errors.RePassword.message}
            </p>
          )}
        </div>
        <div>
          <input
            type="checkbox"
            className=""
            name="Terms"
            {...register("Terms", { required: "This is required" })}
          />
          I agree all statements in Terms & conditions
          {errors.Terms && (
            <p className="error-last">
              {errors.Terms.message}
            </p>
          )}
        </div>
        <br />

        <input
          className="submitbtn "
          type="submit"
          value="Sign up"
        />
      </form>
    </div>
  );
};

export default Register;
