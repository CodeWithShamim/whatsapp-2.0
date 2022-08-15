import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";
import auth from "../../../firebase.init";
import DefaultMessage from "./DefaultMessage";
import FriendMessage from "./FriendMessage";
import UserMessage from "./UserMessage";
import PulseLoader from "react-spinners/PulseLoader";
import { useEffect } from "react";
import { useState } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

const Messages = ({ scrollRef }) => {
  const [user] = useAuthState(auth);
  const messages = useSelector((state) => state.message.message);
  const typingMessage = useSelector((state) => state.message.typingMessage);
  const friendInfo = useSelector((state) => state.user.userInfo);
  const friendInfoId = friendInfo?._id ? friendInfo._id : friendInfo.id;
  const [intialLoading, setInitialLoading] = useState(false);

  useEffect(() => {
    setInitialLoading(true);
    setTimeout(() => {
      setInitialLoading(false);
    }, 1500);

    // scroll after loading
    setTimeout(() => {
      scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 1600);
  }, [friendInfo]);

  return (
    <div className="relative overflow-y-auto w-full flex flex-col justify-start h-screen gap-3 m-5 pr-10">
      {/* intialLoading */}
      {intialLoading ? (
        <div className="flex justify-center h-full items-center">
          <PropagateLoader color="#F5474A" size={10} />
        </div>
      ) : (
        <>
          {messages && messages.length > 0 ? (
            <>
              {messages?.map((message) =>
                message.senderName === user?.displayName ? (
                  <>
                    <UserMessage
                      key={message._id}
                      message={message}
                      scrollRef={scrollRef}
                    ></UserMessage>
                  </>
                ) : (
                  <>
                    <FriendMessage
                      key={message._id}
                      message={message}
                      typingMessage={typingMessage}
                      scrollRef={scrollRef}
                    ></FriendMessage>
                  </>
                )
              )}
            </>
          ) : (
            <DefaultMessage></DefaultMessage>
          )}
        </>
      )}

      {/* ------show typing message------ */}
      {typingMessage?.message && typingMessage?.senderId === friendInfoId ? (
        <p ref={scrollRef} className="text-sm flex items-center gap-1">
          <span className="text-accent">{typingMessage.senderName}</span> is
          typing
          <span>
            <PulseLoader color="red" size={5} />
          </span>
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default Messages;
