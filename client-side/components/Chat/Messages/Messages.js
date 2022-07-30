import { useEffect, useState } from "react";
import DefaultMessage from "./DefaultMessage";
import FriendMessage from "./friendMessage";
import UserMessage from "./UserMessage";

const Messages = () => {
  const [date, setDate] = useState("");
  const getTime = new Date().toLocaleTimeString();

  useEffect(() => {
    setDate(getTime);
  }, [getTime]);

  const userMessage = [
    {
      _id: 1,
      message: "Hello! how are you?ddddddddddddddddddddddddddddddddddd",
      date: date,
    },
    {
      _id: 2,
      message: "I'm also fine",
      date: date,
    },
    {
      _id: 3,
      message: "Bye",
      date: date,
    },
  ];

  const friendMessage = [
    {
      _id: 1,
      message:
        "Hi! I'm fine and youvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv",
      date: date,
    },
    {
      _id: 2,
      message: "Ohh! ok",
      date: date,
    },
    {
      _id: 3,
      message: "Bye",
      date: date,
    },
  ];
  return (
    <div className="overflow-y-auto h-screen w-full grid gap-5 m-5 pr-10">
      {userMessage || friendMessage ? (
        <>
          {/* ---------user message--------- */}
          <div className="flex gap-5 flex-col items-end">
            {userMessage.map((userMsg) => (
              <UserMessage key={userMsg._id} userMsg={userMsg}></UserMessage>
            ))}
          </div>
          {/* ---------friend message--------- */}
          <div className="flex gap-5 flex-col items-start">
            {friendMessage.map((friendMsg) => (
              <FriendMessage
                key={friendMsg._id}
                friendMsg={friendMsg}
              ></FriendMessage>
            ))}
          </div>
        </>
      ) : (
        <>
          <DefaultMessage></DefaultMessage>
        </>
      )}
    </div>
  );
};

export default Messages;
