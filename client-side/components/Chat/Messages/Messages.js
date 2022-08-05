import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";
import auth from "../../../firebase.init";
import DefaultMessage from "./DefaultMessage";
import FriendMessage from "./friendMessage";
import UserMessage from "./UserMessage";

const Messages = ({ scrollRef }) => {
  const [user] = useAuthState(auth);
  const messages = useSelector((state) => state.message.message);

  return (
    <div className="overflow-y-auto h-screen w-full grid gap-5 m-5 pr-10">
      {messages && messages.length > 0 ? (
        <>
          {messages.map((message) =>
            message.senderName === user?.displayName ? (
              <UserMessage
                key={message._id}
                message={message}
                scrollRef={scrollRef}
              />
            ) : (
              <FriendMessage
                key={message._id}
                message={message}
                scrollRef={scrollRef}
              ></FriendMessage>
            )
          )}
        </>
      ) : (
        <DefaultMessage></DefaultMessage>
      )}
    </div>
  );
};

export default Messages;
