import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUp() {
  const initialValue = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formValue, setFormValue] = useState(initialValue);
  const navigation = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formValue.username &&
      formValue.email &&
      formValue.password &&
      formValue.confirmPassword
    ) {
      if (formValue.password !== formValue.confirmPassword) {
        toast.warn("Your Password dosen't Match", {
          toastId: "success1",
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          transition: Zoom,
        });
      } else {
        toast.success("sign-up complete", {
          toastId: "success1",
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          transition: Zoom,
        });
        let arr = JSON.parse(localStorage.getItem("signupInfo"));
        if (arr !== null) {
          arr.push(formValue);
        } else {
          arr = [formValue];
        }
        localStorage.setItem("signupInfo", JSON.stringify(arr));
        setTimeout(() => {
          navigation("/SignUpUsers");
        }, 2000);
      }
    } else {
      toast.warn("please Fill the Imformation First", {
        toastId: "success1",
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        transition: Zoom,
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formValue.username}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formValue.email}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formValue.password}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            name="confirmPassword"
            value={formValue.confirmPassword}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button className="submit-btn" type="submit">
          Sign Up
        </button>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        pauseOnHover
      />
    </div>
  );
}

export default SignUp;
