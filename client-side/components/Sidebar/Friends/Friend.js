import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";
import auth from "../../../firebase.init";

const Friend = ({ friend, select }) => {
  const { _id, username, photo } = friend;
  const friendInfo = useSelector((state) => state.user.userInfo);
  const [currentUser, setCurrentUser] = useState({});
  const [user] = useAuthState(auth);
  const messages = useSelector((state) => state.message.message);
  const [lastMessage, setLastMessage] = useState({});

  useEffect(() => {
    if (messages?.length > 0) {
      const getLastMessage = messages[messages.length - 1];
      setLastMessage(getLastMessage);
    } else {
      setLastMessage({});
    }
  }, [messages]);

  const fdId = friendInfo?._id ? friendInfo._id : friendInfo.id;
  //  -------get current user id---------
  useEffect(() => {
    const findCurrentUser = async () => {
      const { data } = await axios.get(
        `https://whatsapp-new-2-0.herokuapp.com/users/${user?.email}`
      );
      setCurrentUser(data.result);
    };
    findCurrentUser();
  }, []);

  // console.log(lastMessage);
  // console.log("friendInfo", friendInfo);
  // console.log("currentUser", currentUser);

  return (
    <div
      className={`flex gap-4 justify-start items-center px-2 py-4 rounded border border-b-0 cursor-pointer ${
        select === _id && "bg-primary text-secondary"
      }`}
    >
      <Image
        src={photo || "/images/default.jpg"}
        alt={username}
        height={60}
        width={60}
        placeholder="blur"
        blurDataURL={photo || "/images/default.jpg"}
        // layout="fill"
        objectFit="cover"
        className="rounded-full"
      />
      <div className="flex flex-col gap-2 justify-center">
        <h2 className="font-semibold">{username}</h2>
        {/* ----lase message---------- */}
        <p>
          {/* {(lastMessage.senderId === currentUser[0]._id &&
            lastMessage.receiverId === fdId) ||
          (lastMessage.senderId === fdId &&
            lastMessage.receiverId === currentUser[0]._id)
            ? lastMessage?.message?.text
            : ""} */}
        </p>
      </div>
    </div>
  );
};

export default Friend;
