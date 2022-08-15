import { AiOutlineClose, AiOutlineMore } from "react-icons/ai";
import ChatBox from "./ChatBox";
import ChatFriendInfo from "./ChatFriendInfo/ChatFriendInfo";
import Messages from "./Messages/Messages";
import { useEffect, useRef, useState } from "react";
import { FiChevronsRight } from "react-icons/fi";
import { useSelector } from "react-redux";
import Image from "next/image";
import { RiWifiOffLine } from "react-icons/ri";

const Chat = () => {
  const [close, setClose] = useState(false);
  const userInfo = useSelector((state) => state.user.userInfo);
  const { id, username, email, photo } = userInfo;
  const scrollRef = useRef();
  const messages = useSelector((state) => state.message.message);
  const typingMessage = useSelector((state) => state.message.typingMessage);
  const activeUsers = useSelector((state) => state.activeUser.activeUser);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typingMessage]);

  // --------check friend online / offline -----------
  useEffect(() => {
    const isActiveFriend = activeUsers?.some((au) => au._id === id);
    if (isActiveFriend) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [userInfo, isActive, activeUsers]);

  return (
    <div className="h-screen w-full flex flex-col lg:flex-row mt-4 lg:mt-0">
      <div className="w-full h-full flex flex-col justify-between">
        {/* ---Header start--- */}
        <div className="p-2 m-2 rounded-3xl shadow-xl flex justify-between items-center">
          <div className="flex justify-between items-center lg:gap-3">
            <Image
              className="rounded-full"
              src={photo}
              height={50}
              width={50}
              objectFit="cover"
              alt={username}
            />
            )
            <div className="pl-2 lg:pl-0">
              <h2>{username}</h2>
              <p className="flex items-center justify-start  ">
                {isActive ? (
                  <>
                    <span className="badge badge-xs badge-accent mr-1"></span>
                    <span>online</span>
                  </>
                ) : (
                  <>
                    <span className="text-sm pr-1">
                      <RiWifiOffLine />
                    </span>
                    <span className="">offline</span>
                  </>
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
        <Messages scrollRef={scrollRef}></Messages>

        {/* ------chatbox---- */}
        <ChatBox />
      </div>

      {/* -------------toggle chat friend info--------------- */}
      <div onClick={() => setClose(!close)} className="mt-6 cursor-pointer">
        {!close && (
          <div
            onClick={() => setClose(!close)}
            className="absolute hidden lg:block right-6 top-14 z-50 cursor-pointer p-3 text-lg"
          >
            <AiOutlineClose />
          </div>
        )}

        {close && (
          <div className="text-2xl hidden lg:block">
            <FiChevronsRight />
          </div>
        )}
      </div>

      {/* -------------ChatFriendInfo------------ */}
      <div
        id="friendInfo"
        // className={`lg:w-1/2 ${close && "lg:hidden"}`}
        className={`lg:w-1/2 hidden ${!close && "lg:block"}`}
      >
        <ChatFriendInfo></ChatFriendInfo>
      </div>
    </div>
  );
};

export default Chat;
