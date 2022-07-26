import { FaRocketchat } from "react-icons/fa";
import Link from "next/link";
import SocialLogin from "../components/SocialLogin";

const Login = () => {
  return (
      <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center w-full">
        <p className="bg-primary text-white text-5xl p-4 rounded-3xl">
          <FaRocketchat />
        </p>
        <h1 className="text-3xl font-semibold py-4">Login</h1>

        <div className="bg-secondary shadow-2xl rounded-xl w-11/12 md:w-2/4 lg:w-1/3 p-8 ">
          {/* ---form--- */}
          <form className="flex flex-col gap-5">
            <input
              className="p-3 rounded bg-slate-200 focus:outline focus:outline-primary"
              type="email"
              placeholder="Enter your email"
              name="email"
              id="email"
            />
            <input
              className="p-3 rounded bg-slate-200 focus:outline focus:outline-primary "
              type="password"
              placeholder="Enter your password"
              name="password"
              id="password"
            />
            <p className="text-primary">Forgot password?</p>
            <input
              className="btn btn-primary text-secondary"
              type="submit"
              value="Login"
            />
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
    </div>
  );
};

export default Login;
