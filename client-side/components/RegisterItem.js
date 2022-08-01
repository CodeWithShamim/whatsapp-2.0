import { FaRocketchat } from "react-icons/fa";
import Link from "next/link";
import SocialLogin from "../components/SocialLogin";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { useRouter } from "next/router";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

const RegisterItem = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, error1] = useUpdateProfile(auth);
  const [info, setInfo] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: "",
  });
  const [loadImage, setLoadImage] = useState("");
  const [uploadLoading, setUploadLoading] = useState(false);
  const router = useRouter();
  const [imageError, setImageError] = useState("");

  // -----------handle input--------------
  const handleInput = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  // ------------handle image file------------
  const handleFile = (e) => {
    if (e.target.files.length !== 0) {
      setInfo({ ...info, [e.target.name]: e.target.files[0] });
      const reader = new FileReader();
      reader.onload = () => {
        setLoadImage(reader.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  // --------register-----------
  const handleRegister = async (e) => {
    e.preventDefault();
    const {
      username: displayName,
      email,
      password,
      confirmPassword,
      image,
    } = info;

    // confirm register
    if (password === confirmPassword) {
      // upload image in imgbb
      const uploadImage = async (img) => {
        setUploadLoading(true);
        const apiKey = "2db9baf808994bd3a320a217ed6a6c0a";
        const fromData = new FormData();
        fromData.append("image", img);
        try {
          const res = await axios.post(
            `https://api.imgbb.com/1/upload?key=${apiKey}`,
            fromData
          );
          const photoURL = res?.data?.data?.image?.url;
          if (photoURL) {
            await createUserWithEmailAndPassword(email, password);
            await updateProfile({
              displayName,
              photoURL,
            });
            setUploadLoading(false);
          }
        } catch (error) {
          setImageError(error.message);
          setUploadLoading(false);
        }
      };
      uploadImage(image);
    } else {
      toast.error("Password matching should be same", {
        position: "bottom-right",
        autoClose: 8000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  if (user) {
    router.push("/");
    toast.success("Profile update success", {
      position: "bottom-right",
      autoClose: 8000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }

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
              onChange={handleFile}
            />
            {loadImage && (
              <img className="w-16 h-16 rounded-full" src={loadImage} alt="" />
            )}
            {/* {uploadLoading && <ClipLoader color="red" />} */}

            {loading || uploadLoading ? (
              <div className="btn loading bg-primary border-0"></div>
            ) : (
              <input
                className="btn btn-primary text-secondary"
                type="submit"
                value="Register"
              />
            )}
            {error && <p className="text-primary">Warning! {error.code}</p>}
            {error1 && <p className="text-primary">Warning! {error1.code}</p>}
            {imageError && (
              <p className="text-primary">Warning! {imageError}</p>
            )}
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
      <ToastContainer />
    </div>
  );
};

export default RegisterItem;
