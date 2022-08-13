import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";
import auth from "../../../firebase.init";
import DefaultMessage from "./DefaultMessage";
import FriendMessage from "./FriendMessage";
import UserMessage from "./UserMessage";
import PulseLoader from "react-spinners/PulseLoader";

const Messages = ({ scrollRef }) => {
  const [user] = useAuthState(auth);
  const messages = useSelector((state) => state.message.message);
  const typingMessage = useSelector((state) => state.message.typingMessage);
  const friendInfo = useSelector((state) => state.user.userInfo);
  const friendInfoId = friendInfo?._id ? friendInfo._id : friendInfo.id;

  return (
    <div className="relative overflow-y-auto w-full flex flex-col justify-start h-full gap-3 m-5 pr-10">
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
