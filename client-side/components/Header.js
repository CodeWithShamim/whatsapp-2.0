import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { signOut } from "firebase/auth";
import { BiLogInCircle } from "react-icons/bi";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      {/* -----header------- */}
      <div className="flex justify-between items-center gap-3 m-2">
        <h2 className="text-2xl">Messages</h2>

        <div className="flex items-center justify-center">
          <div className="avatar online">
            <div className="w-10 rounded-2xl">
              <img src={user?.photoURL} />
            </div>
          </div>
          {/* ---log out--- */}
          <p
            className="text-2xl pl-3 cursor-pointer text-accent hover:text-primary"
            onClick={() => signOut(auth)}
          >
            <BiLogInCircle />
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;