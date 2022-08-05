import { AiOutlineClose, AiOutlineMore } from "react-icons/ai";
import ChatBox from "./ChatBox";
import ChatFriendInfo from "./ChatFriendInfo/ChatFriendInfo";
import Messages from "./Messages/Messages";
import { useEffect, useRef, useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { useSelector } from "react-redux";

const Chat = () => {
  const [close, setClose] = useState(false);
  const userInfo = useSelector((state) => state.user.userInfo);
  const { id, username, email, photo } = userInfo;
  const scrollRef = useRef();
  const messages = useSelector((state) => state.message.message);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="h-screen w-full flex flex-col lg:flex-row mt-4 lg:mt-0">
      <div className="w-full h-full flex flex-col justify-between">
        {/* ---Header start--- */}
        <div className="p-2 m-2 rounded-3xl shadow-2xl shadow-gray-200 flex justify-between items-center">
          <div className="flex justify-between items-center lg:gap-3">
            <img className="w-10 h-10 rounded-full" src={photo} alt="profile" />

            <div>
              <h2>{username}</h2>
              <p className="flex  items-center justify-start">
                <span className="badge badge-xs badge-accent mr-1"></span>
                online
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
        <Messages scrollRef={scrollRef}></Messages>

        {/* ------chatbox---- */}
        <ChatBox />
      </div>

      {/* -------------toggle chat friend info--------------- */}
      <div onClick={() => setClose(!close)} className="mt-6 cursor-pointer">
        {/* ---------close friend info btn---------- */}
        {!close && (
          <div
            onClick={() => setClose(!close)}
            className="absolute hidden lg:block right-6 top-14 z-50 text-base cursor-pointer p-3"
          >
            <AiOutlineClose />
          </div>
        )}

        {/* -----------------show chat friend info-------------- */}
        {close && (
          <div className="text-2xl hidden lg:block">
            <BiChevronRight />
          </div>
        )}
      </div>

      {/* -------------ChatFriendInfo------------ */}
      <div id="friendInfo" className={`lg:w-1/2 ${close && "lg:hidden"}`}>
        <ChatFriendInfo></ChatFriendInfo>
      </div>
    </div>
  );
};

export default Chat;
