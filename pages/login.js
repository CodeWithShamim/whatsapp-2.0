import { FaRocketchat } from "react-icons/fa";

const Login = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <p className="bg-[#F54648] text-white text-5xl p-4 rounded-3xl">
          <FaRocketchat />
        </p>
        <h1 className="text-3xl font-semibold py-4">Login</h1>
      </div>
    </div>
  );
};

export default Login;
