import axios from "axios";
import { useState, useEffect, createContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Chat from "../components/Chat/Chat";
import Header from "../components/Header";
import Loading from "../components/Loading";
import Sidebar from "../components/Sidebar/Sidebar";
import auth from "../firebase.init";
export const ThemeContext = createContext("theme");
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [user, loading] = useAuthState(auth);
  const themeToggle = JSON.parse(localStorage.getItem("theme"));
  const [theme, setTheme] = useState(themeToggle || false);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  if (loading) {
    return <Loading />;
  }

  // post user data in database
  useEffect(() => {
    const postUser = async () => {
      const newUser = {
        username: user?.displayName,
        email: user?.email,
        photo: user?.photoURL,
      };

      try {
        const { data } = await axios.put(
          "https://whatsapp-new-backend.vercel.app/users",
          newUser
        );
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    postUser();
  }, [user]);

  return (
    <div data-theme={theme ? "dark" : "light"}>
      <ThemeContext.Provider value={[theme, setTheme]}>
        {/* ---------header----------- */}
        <Header />
      </ThemeContext.Provider>

      <div className="h-screen flex flex-col lg:flex-row lg:px-6 font-serif text-xs">
        {/* -------------sidebar--------------- */}
        <div className="lg:w-1/4 shadow-inner rounded-xl">
          <Sidebar />
        </div>

        {/* ------chat------ */}

        <div className="lg:w-full bg-base-100">
          <Chat />
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Home;
