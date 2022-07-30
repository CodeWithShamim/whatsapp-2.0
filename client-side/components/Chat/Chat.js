import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { AiOutlineMore } from "react-icons/ai";
import ChatBox from "./ChatBox";
import SocialLoading from "../SocialLoading";
import ChatFriendInfo from "./ChatFriendInfo/ChatFriendInfo";
import Messages from "./Messages/Messages";

const Chat = () => {
  const [user, loading] = useAuthState(auth);
  const { photoURL, displayName } = user;
  const isOnline = window.navigator.onLine;

  return (
    <div className="h-screen flex flex-col lg:flex-row mt-4 lg:mt-0">
      <div className="w-full h-full flex flex-col justify-between">
        {/* ---Header start--- */}
        <div className="bg-secondary p-2 m-2 rounded-3xl shadow-lg flex justify-between items-center">
          <div className="flex justify-between items-center lg:gap-3">
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
          <div className="text-2xl cursor-pointer">
            <AiOutlineMore />
          </div>
        </div>
        {/* ---Header end--- */}

        {/* --------------------------Message content---------------------------- */}
        <Messages></Messages>

        {/* ------chatbox---- */}
        <ChatBox />
      </div>

      {/* -------------ChatFriendInfo------------ */}
      <div className="lg:w-1/2">
        <ChatFriendInfo></ChatFriendInfo>
      </div>
    </div>
  );
};

export default Chat;
