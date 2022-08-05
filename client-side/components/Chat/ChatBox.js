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
import { useDispatch, useSelector } from "react-redux";
import useSound from "use-sound";
import { getMessage } from "../../features/message/messageSlice";
import auth from "../../firebase.init";
// import sendSound from "../../public/audio/send.mp3";

const ChatBox = () => {
  const [user] = useAuthState(auth);
  const friendInfo = useSelector((state) => state.user.userInfo);
  const [currentUser, setCurrentUser] = useState([]);
  const [message, setMessage] = useState([]);
  const [addMsgSuccess, setAddMsgSuccess] = useState(false);
  const [image, setImage] = useState("");
  const [isImageUpload, setIsImageUpload] = useState(false);
  const dispatch = useDispatch();
  const [sendMsgAudio] = useSound();

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

  // get image
  const handleImage = async (e) => {
    setIsImageUpload(true);
    if (e.target.files.length !== 0) {
      const image = e.target.files[0];
      const formData = new FormData();
      formData.append("image", image);
      const apiKey = "2db9baf808994bd3a320a217ed6a6c0a";

      // ------upload image--------
      try {
        const res = await axios.post(
          `https://api.imgbb.com/1/upload?key=${apiKey}`,
          formData
        );
        const photoURL = res?.data?.data?.image?.url;
        setImage(photoURL);
        setIsImageUpload(false);
      } catch (error) {
        console.log(error);
        // setIsImageUpload(false);
      }
    } else {
      alert("Please! select an image");
    }
  };
  // -------add message-------
  const addMessage = async (e) => {
    e.preventDefault();
    let textMessage = e.target.msg.value;
    const data = {
      senderName: currentUser[0].username,
      senderId: currentUser[0]._id,
      receiverId: friendInfo._id ? friendInfo._id : friendInfo.id,
      message: {
        text: textMessage ? textMessage : "",
        image: image ? image : "",
      },
    };
    e.target.msg.value = "";

    // ---post message data---
    try {
      const res = await axios.post(
        "http://localhost:5000/message/addMessage",
        data
      );

      if (res.data.message === "success") {
        sendMsgAudio();

        setAddMsgSuccess(!addMsgSuccess);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // --------get message---------
  useEffect(() => {
    const getMessage = async (fdId, myId) => {
      try {
        const res = await axios(
          `http://localhost:5000/message/getMessage?fdId=${fdId}&&myId=${myId}`
        );
        setMessage(res.data.result);
        console.log(res.data.result);
      } catch (error) {
        console.log(error);
      }
    };
    getMessage(
      friendInfo._id ? friendInfo._id : friendInfo.id,
      currentUser[0]?._id
    );
  }, [friendInfo, addMsgSuccess]);

  // ----------dispatch message----------
  useEffect(() => {
    dispatch(getMessage(message));
  }, [message]);

  return (
    <form onSubmit={addMessage} className="m-2 relative">
      <textarea
        className="w-full text-black border rounded-lg p-2 outline-secondary focus:outline focus:outline-accent"
        placeholder="Message"
        onChange={() => setIsImageUpload(false)}
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
          <input
            onChange={handleImage}
            className="hidden"
            type="file"
            name="image"
            id="image"
          />
        </span>

        {/* -----gif image---------- */}
        <span className="text-xl cursor-pointer">
          <RiGiftFill />
        </span>

        <label
          htmlFor={isImageUpload ? "" : "message"}
          className={`text-xs text-secondary bg-primary p-[5px] rounded-full cursor-pointer ${
            isImageUpload && "bg-gray-400"
          }`}
        >
          <RiSendPlane2Fill />
        </label>
        <input className="hidden" type="submit" id="message" name="message" />
      </div>
    </form>
  );
};

export default ChatBox;
