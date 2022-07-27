import { FaRocketchat } from "react-icons/fa";
import Link from "next/link";
import SocialLogin from "../components/SocialLogin";
import { useState } from "react";

const RegisterItem = () => {
  const [info, setInfo] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: "",
  });

  const handleInput = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(info);
  };

  console.log(info);

  return (
    <div className="h-screen flex justify-center items-center m-6">
      <div className="flex flex-col justify-center items-center w-full">
        <p className="bg-primary text-white text-5xl p-4 rounded-3xl">
          <FaRocketchat />
        </p>
        <h1 className="text-3xl font-semibold py-4">Login</h1>

        <div className="bg-secondary shadow-2xl rounded-xl w-11/12 md:w-2/4 lg:w-1/3 p-8 ">
          {/* ---form--- */}
          <form onSubmit={handleRegister} className="flex flex-col gap-3">
            <input
              className="p-3 rounded bg-slate-200 focus:outline focus:outline-primary"
              type="text"
              placeholder="Username"
              name="username"
              id="username"
              onChange={handleInput}
            />
            <input
              className="p-3 rounded bg-slate-200 focus:outline focus:outline-primary"
              type="email"
              placeholder="Email"
              name="email"
              id="email"
              onChange={handleInput}
            />
            <input
              className="p-3 rounded bg-slate-200 focus:outline focus:outline-primary"
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              onChange={handleInput}
            />
            <input
              className="p-3 rounded bg-slate-200 focus:outline focus:outline-primary"
              type="password"
              placeholder="Confirm password"
              name="confirmPassword"
              id="confirmPassword"
              onChange={handleInput}
            />
            <input
              className="p-3 rounded bg-slate-200 focus:outline focus:outline-primary"
              type="file"
              name="image"
              id="image"
              onChange={handleInput}
            />

            <input
              className="btn btn-primary text-secondary"
              type="submit"
              value="Register"
            />
            <p>
              Already have an account?{" "}
              <span className="text-primary font-semibold">
                {" "}
                <Link href="/login">Login</Link>
              </span>
            </p>
          </form>
          {/* ---social login--- */}
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default RegisterItem;
