import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthModal = ({ onClose }) => {
  const [type, setType] = useState("login");

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    otp: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setFormData({
      username: "",
      email: "",
      password: "",
      otp: "",
    });
  };

  /* ================= LOGIN ================= */
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_Backend_url}/api/login`,
        {
          email: formData.email,
          password: formData.password,
        }
      );

      if (res.data.success) {
        toast.success(res.data.message);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("role", res.data.role);
        localStorage.setItem("user", JSON.stringify(res.data.user));

        setTimeout(() => {
          resetForm();
          onClose();
        }, 1200);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  /* ================= SIGNUP ================= */
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_Backend_url}/api/register`,
        {
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }
      );

      if (res.data.success) {
        toast.success(res.data.message);
        setType("verify");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup failed");
    }
  };

  /* ================= VERIFY EMAIL ================= */
  const handleVerifyEmail = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_Backend_url}/api/verify-email`,
        {
          email: formData.email,
          otp: formData.otp,
        }
      );

      if (res.data.success) {
        toast.success(res.data.message);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));

        setTimeout(() => {
          resetForm();
          onClose();
        }, 1200);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "OTP verification failed");
    }
  };

  /* ================= FORGOT PASSWORD ================= */
  const handleForgotPassword = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Email and new password required");
      return;
    }

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_Backend_url}/api/changepassword`,
        {
          email: formData.email,
          password: formData.password,
        }
      );

      if (res.data.success) {
        toast.success("Password updated successfully!");
        resetForm();
        setType("login");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Password update failed");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center px-4">
      <ToastContainer position="top-right" autoClose={2000} />

      <div className="bg-white dark:bg-[#0f0f0f] w-full max-w-md rounded-xl p-8 border border-black/10 dark:border-white/10 relative">

        {/* Close */}
        <button
          onClick={() => {
            resetForm();
            setType("login");
            onClose();
          }}
          className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
        >
          <FaTimes />
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-bold mb-6 text-black dark:text-white text-center">
          {type === "login" && "Login"}
          {type === "signup" && "Sign Up"}
          {type === "verify" && "Verify Email"}
          {type === "forgot" && "Forgot Password"}{" "}
          <span className="text-orange-500">ArraySoft</span>
        </h2>

        {/* LOGIN */}
        {type === "login" && (
          <form className="space-y-4" onSubmit={handleLogin}>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full text-black dark:text-white bg-gray-100 dark:bg-[#1a1a1a]
              p-3 rounded border border-black/10 dark:border-white/10
              outline-none focus:border-orange-500"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full text-black dark:text-white bg-gray-100 dark:bg-[#1a1a1a]
              p-3 rounded border border-black/10 dark:border-white/10
              outline-none focus:border-orange-500"
              required
            />

            <p
              onClick={() => setType("forgot")}
              className="text-sm text-orange-500 cursor-pointer hover:underline text-right"
            >
              Forgot password?
            </p>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded font-semibold hover:bg-orange-600 transition"
            >
              Login
            </button>

            <p className="text-sm text-center text-gray-500 dark:text-gray-400 mt-4">
              Don’t have an account?
              <button
                type="button"
                onClick={() => setType("signup")}
                className="text-orange-500 ml-2 hover:underline"
              >
                Sign Up
              </button>
            </p>
          </form>
        )}

        {/* SIGNUP */}
        {type === "signup" && (
          <form className="space-y-4" onSubmit={handleSignup}>
            {["username", "email", "password"].map((field) => (
              <input
                key={field}
                type={field === "password" ? "password" : "text"}
                name={field}
                placeholder={
                  field === "username"
                    ? "Full Name"
                    : field === "email"
                    ? "Email Address"
                    : "Password"
                }
                value={formData[field]}
                onChange={handleChange}
                className="w-full text-black dark:text-white bg-gray-100 dark:bg-[#1a1a1a]
                p-3 rounded border border-black/10 dark:border-white/10
                outline-none focus:border-orange-500"
                required
              />
            ))}

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded font-semibold hover:bg-orange-600 transition"
            >
              Sign Up
            </button>

            <p className="text-sm text-center text-gray-500 dark:text-gray-400 mt-4">
              Already have an account?
              <button
                type="button"
                onClick={() => setType("login")}
                className="text-orange-500 ml-2 hover:underline"
              >
                Login
              </button>
            </p>
          </form>
        )}

        {/* VERIFY */}
        {type === "verify" && (
          <form className="space-y-4" onSubmit={handleVerifyEmail}>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
              Enter the OTP sent to your email
            </p>

            <input
              type="text"
              name="otp"
              placeholder="Enter OTP"
              value={formData.otp}
              onChange={handleChange}
              className="w-full text-black dark:text-white bg-gray-100 dark:bg-[#1a1a1a]
              p-3 rounded border border-black/10 dark:border-white/10
              outline-none focus:border-orange-500"
              required
            />

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded font-semibold hover:bg-orange-600 transition"
            >
              Verify Email
            </button>
          </form>
        )}

        {/* FORGOT */}
        {type === "forgot" && (
          <form className="space-y-4" onSubmit={handleForgotPassword}>
            {["email", "password"].map((field) => (
              <input
                key={field}
                type={field === "password" ? "password" : "email"}
                name={field}
                placeholder={
                  field === "email"
                    ? "Registered Email"
                    : "New Password"
                }
                value={formData[field]}
                onChange={handleChange}
                className="w-full text-black dark:text-white bg-gray-100 dark:bg-[#1a1a1a]
                p-3 rounded border border-black/10 dark:border-white/10
                outline-none focus:border-orange-500"
                required
              />
            ))}

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded font-semibold hover:bg-orange-600 transition"
            >
              Change Password
            </button>

            <p
              onClick={() => setType("login")}
              className="text-sm text-center text-orange-500 cursor-pointer hover:underline"
            >
              Back to Login
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthModal;
