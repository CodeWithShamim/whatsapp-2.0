import Chat from "../components/Chat/Chat";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <>
      {/* ---------header----------- */}
      <Header />

      <div className="flex flex-col lg:flex-row px-6">
        {/* -------------sidebar--------------- */}
        <div className="basis-1/4 shadow-2xl rounded-xl">
          <Sidebar />
        </div>

        {/* ------chat------ */}

        <div className="p-2 basis-1/2">
          <Chat />
        </div>
      </div>
    </>
  );
};

export default Home;
