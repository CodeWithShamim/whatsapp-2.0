import { FaRocketchat } from "react-icons/fa";
import Link from "next/link";
import SocialLogin from "./SocialLogin";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { useState } from "react";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";

const LoginItem = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  // handle login
  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  if (user) {
    router.push("/");
    toast.success("Login success", {
      position: "bottom-right",
      autoClose: 8000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center w-full">
        <p className="bg-primary text-white text-5xl p-4 rounded-3xl">
          <FaRocketchat />
        </p>
        <h1 className="text-3xl font-semibold py-4">Login</h1>

        <div className="bg-secondary shadow-2xl rounded-xl w-11/12 md:w-2/4 lg:w-1/3 p-8 ">
          {/* ---form--- */}
          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            <input
              className="p-3 rounded bg-slate-200 focus:outline focus:outline-primary"
              type="email"
              placeholder="Enter your email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="p-3 rounded bg-slate-200 focus:outline focus:outline-primary "
              type="password"
              placeholder="Enter your password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="text-primary">Forgot password?</p>
            {loading ? (
              <div className="btn loading bg-primary border-0"></div>
            ) : (
              <input
                className="btn btn-primary text-secondary"
                type="submit"
                value="Login"
              />
            )}
            {error && <p className="text-primary">Warning! {error.code}</p>}
            <p>
              Don't have an account?{" "}
              <span className="text-primary font-semibold">
                {" "}
                <Link href="/register">Register</Link>
              </span>
            </p>
          </form>

          {/* ---social login--- */}
          <SocialLogin />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginItem;
