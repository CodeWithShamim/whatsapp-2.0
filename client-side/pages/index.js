import axios from "axios";
import { useState, useEffect, createContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Chat from "../components/Chat/Chat";
import Header from "../components/Header";
import Loading from "../components/Loading";
import Sidebar from "../components/Sidebar/Sidebar";
import auth from "../firebase.init";
export const ThemeContext = createContext("theme");

const Home = () => {
  const [user, loading] = useAuthState(auth);
  const themeToggle = JSON.parse(localStorage.getItem("theme"));
  const [theme, setTheme] = useState(themeToggle || false);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    console.log(theme);
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
          "http://localhost:5000/users",
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

      <div className="h-screen flex flex-col lg:flex-row px-2 md:px-4 lg:px-6 font-serif text-xs">
        {/* -------------sidebar--------------- */}
        <div className="lg:w-1/4 shadow-2xl rounded-xl pb-6">
          <Sidebar />
        </div>

        {/* ------chat------ */}

        <div className="lg:w-full">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default Home;
