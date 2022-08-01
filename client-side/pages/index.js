import axios from "axios";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Chat from "../components/Chat/Chat";
import Header from "../components/Header";
import Loading from "../components/Loading";
import Sidebar from "../components/Sidebar/Sidebar";
import auth from "../firebase.init";

const Home = () => {
  const [user, loading] = useAuthState(auth);
  // post user data in database

  if (loading) {
    return <Loading />;
  }
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
    <>
      {/* ---------header----------- */}
      <Header />

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
    </>
  );
};

export default Home;
