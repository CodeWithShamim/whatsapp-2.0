import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { AiFillCalendar } from "react-icons/ai";
import {
  RiAttachment2,
  RiGalleryFill,
  RiGiftFill,
  RiSendPlane2Fill,
} from "react-icons/ri";
import { useSelector } from "react-redux";
import auth from "../../firebase.init";

const ChatBox = () => {
  const [user] = useAuthState(auth);
  const friendInfo = useSelector((state) => state.user.userInfo);
  const [currentUser, setCurrentUser] = useState([]);

  // -------get current user id---------
  useEffect(() => {
    const findCurrentUser = async () => {
      const { data } = await axios.get(
        `http://localhost:5000/users/${user?.email}`
      );
      setCurrentUser(data.result);
    };
    findCurrentUser();
  }, [user?.email]);

  // -------get message data-------
  const getMessage = async (e) => {
    e.preventDefault();
    const textMessage = e.target.msg.value;
    const data = {
      senderName: currentUser[0].username,
      senderId: currentUser[0]._id,
      receiverId: friendInfo._id ? friendInfo._id : friendInfo.id,
      message: {
        text: textMessage,
        image: "",
      },
    };

    // ---post message data---
    try {
      const res = await axios.post(
        "http://localhost:5000/message/addMessage",
        data
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={getMessage} className="m-2 relative">
      <textarea
        className="w-full border rounded-lg p-2 outline-secondary focus:outline focus:outline-accent"
        placeholder="Message"
        name="msg"
        id="msg"
        cols="30"
        rows="4"
      ></textarea>

      {/* -------emoji section-------------- */}
      <div className="absolute right-3 bottom-14 text-xl cursor-pointer">
        <span>
          <AiFillCalendar />
        </span>
      </div>

      <div className="flex justify-end items-center gap-3 text-slate-400">
        {/* ---------attach file------------ */}
        <span className="text-xl">
          <label className="cursor-pointer" htmlFor="attachment">
            <RiAttachment2 />
          </label>
          <input
            className="hidden"
            type="file"
            name="attachment"
            id="attachment"
          />
        </span>

        {/* -----gallery image---------- */}
        <span className="text-xl">
          <label className="cursor-pointer" htmlFor="image">
            <RiGalleryFill />
          </label>
          <input className="hidden" type="file" name="image" id="image" />
        </span>

        {/* -----gif image---------- */}
        <span className="text-xl cursor-pointer">
          <RiGiftFill />
        </span>

        <label
          htmlFor="message"
          className="text-xs text-secondary bg-primary p-[5px] rounded-full cursor-pointer"
        >
          <RiSendPlane2Fill />
        </label>
        <input className="hidden" type="submit" id="message" name="message" />
      </div>
    </form>
  );
};

export default ChatBox;
