import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { AiOutlineMore } from "react-icons/ai";
import ChatBox from "./ChatBox";
import SocialLoading from "../SocialLoading";

const Chat = () => {
  const [user, isLoading] = useAuthState(auth);
  const { photoURL, displayName } = user;
  const isOnline = window.navigator.onLine;

  console.log(photoURL);

  return (
    <div className="relative h-screen">
      {/* ---Header start--- */}
      <div className="bg-secondary p-2 m-2 rounded-3xl shadow-lg flex justify-between items-center">
        <div className="flex justify-between items-center gap-3">
          <img
            className="w-10 h-10 rounded-full"
            src={photoURL}
            alt="profile"
          />
          <div>
            <h2>{displayName}</h2>
            <p>
              {isOnline ? (
                <span>
                  <span className="badge badge-xs badge-accent"></span> online
                </span>
              ) : (
                <span>offline</span>
              )}
            </p>
          </div>
        </div>

        {/* ----morevertIcon---- */}
        <div className="text-4xl">
          <AiOutlineMore />
        </div>
      </div>
      {/* ---Header end--- */}

      {/* ------chatbox---- */}
      <div className="absolute bottom-20 left-0 right-0">
        <ChatBox />
      </div>
    </div>
  );
};

export default Chat;
