import React, { useContext, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const notify = () => toast.success("You have been logged in successfully");

  const auth = getAuth();
  const user = useContext(AuthContext);
console.log(user);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailWrong, setEmailWrong] = useState(false);
  const [passwordWrong, setPasswordWrong] = useState(false);
  const [loginError, setLoginError] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      setLoginError("Please enter both email and password");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        user.setAsUser(userCredential.user.displayName);
        notify();
        navigate("/");
      })
      .catch((err) => {
        const errorCode = err.code;
        if (errorCode === "auth/invalid-login-credentials" || errorCode === "auth/invalid-credential") {
          setLoginError("Invalid email or password.");
        } else if (errorCode === "auth/invalid-email") {
          setEmailWrong(true);
          setTimeout(() => setEmailWrong(false), 3000);
        } else if (errorCode === "auth/missing-password") {
          setPasswordWrong(true);
          setTimeout(() => setPasswordWrong(false), 3000);
        } else {
          setLoginError("Something went wrong. Please try again.");
        }
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <Toaster />
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Login to Your Account</h2>

        {loginError && <p className="text-red-600 text-center mb-4">{loginError}</p>}
        {emailWrong && <p className="text-red-600 text-center mb-4">Invalid email format</p>}
        {passwordWrong && <p className="text-red-600 text-center mb-4">Password must contain at least 6 characters</p>}

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full border border-gray-300 rounded px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
        >
          Login
        </button>

        <p className="text-center mt-4 text-gray-600">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-700 font-semibold underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
