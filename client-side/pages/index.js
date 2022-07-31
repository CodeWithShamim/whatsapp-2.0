import Chat from "../components/Chat/Chat";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar/Sidebar";

const Home = () => {
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
