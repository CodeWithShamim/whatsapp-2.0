import { useAuthState } from "react-firebase-hooks/auth";
import Chat from "../components/Chat/Chat";
import auth from "../firebase.init";
import { BiLogInCircle } from "react-icons/bi";
import { signOut } from "firebase/auth";

const Home = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="p-4 md:p-6 lg:p-8">
      {/* -----header------- */}
      <div className="flex justify-between items-center gap-3">
        <h2 className="text-3xl">Messages</h2>

        <div className="flex items-center justify-center">
          <div className="avatar online">
            <div className="w-16 rounded-2xl">
              <img src={user?.photoURL} />
            </div>
          </div>
          {/* ---log out--- */}
          <p
            className="text-4xl pl-3 cursor-pointer text-accent hover:text-primary"
            onClick={() => signOut(auth)}
          >
            <BiLogInCircle />
          </p>
        </div>
      </div>

      {/* ------chat------ */}
      <Chat />
    </div>
  );
};

export default Home;
