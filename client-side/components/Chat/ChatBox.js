import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  AiFillCalendar,
  AiOutlineClose,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import {
  RiAttachment2,
  RiGalleryFill,
  RiGiftFill,
  RiSendPlane2Fill,
} from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import useSound from "use-sound";
import {
  getMessage,
  getSocketMessage,
  getTypingMessage,
} from "../../features/message/messageSlice";
import auth from "../../firebase.init";
import { io } from "socket.io-client";
import { addActiveUser } from "../../features/user/activeUserSlice";
import { toast } from "react-toastify";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
// import msgSound from "../../public/sounds/send.mp3";
// import notificationSound from "../../public/sounds/notification.mp3";

const ChatBox = () => {
  const [user] = useAuthState(auth);
  const friendInfo = useSelector((state) => state.user.userInfo);
  const [currentUser, setCurrentUser] = useState([]);
  const [message, setMessage] = useState([]);
  const [socketMessage, setSocketMessage] = useState([]);
  const [typingMessage, setTypingMessage] = useState([]);
  const [addMsgSuccess, setAddMsgSuccess] = useState(false);
  const [image, setImage] = useState("");
  const [isImageUpload, setIsImageUpload] = useState(false);
  const [isShowEmoji, setIsShowEmoji] = useState(false);
  const [emoji, setEmoji] = useState(null);
  const dispatch = useDispatch();
  const [sendMsgAudio] = useSound();
  const [sendNotificationAudio] = useSound();
  const socket = useRef();

  // connect with socket
  useEffect(() => {
    socket.current = io("ws://localhost:8000");
    socket.current.on("getMessage", (data) => {
      setSocketMessage(data);
    });

    // ------received typing message from socket
    socket.current.on("getTypingMessage", (typingData) => {
      setTypingMessage(typingData);
    });
  }, []);

  // dispatch typing message
  useEffect(() => {
    dispatch(getTypingMessage(typingMessage));
  }, [typingMessage]);

  // send active user info
  useEffect(() => {
    socket.current.emit("addActiveUser", currentUser[0]);
    // get active user
    socket.current.on("getActiveUser", (activeUser) => {
      dispatch(addActiveUser(activeUser));
    });
  }, [currentUser]);

  // dispatch socket message
  useEffect(() => {
    if (socketMessage && friendInfo && currentUser) {
      const friendInfoId = friendInfo?._id ? friendInfo._id : friendInfo.id;

      if (
        socketMessage.senderId === friendInfoId &&
        socketMessage.receiverId === currentUser[0]?._id
      ) {
        dispatch(getSocketMessage(socketMessage));
        setSocketMessage([]);
      }

      // ----------show message notification---------
      if (
        socketMessage.senderId !== friendInfoId &&
        socketMessage.receiverId === currentUser[0]?._id
      ) {
        sendNotificationAudio();
        toast.success(`💬 ${socketMessage?.senderName} send a new message`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  }, [socketMessage]);

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
    // emty typing message
    socket.current.emit("typingMessage", {
      senderName: currentUser && currentUser[0].username,
      senderId: currentUser && currentUser[0]._id,
      receiverId: friendInfo._id ? friendInfo._id : friendInfo.id,
      message: "",
    });

    let textMessage = e.target.msg.value || emoji;
    const data = {
      senderName: currentUser && currentUser[0].username,
      senderId: currentUser && currentUser[0]._id,
      receiverId: friendInfo._id ? friendInfo._id : friendInfo.id,
      message: {
        text: textMessage ? textMessage : "",
        image: image ? image : "",
      },
    };
    e.target.msg.value = "";

    // send message to socket
    socket.current.emit("sendMessage", data);

    // ---post message data---
    try {
      const res = await axios.post(
        "http://localhost:5000/message/addMessage",
        data
      );

      if (res.data.message === "success") {
        sendMsgAudio();
        setImage("");
        setAddMsgSuccess(!addMsgSuccess);
        setEmoji(null);
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
        // console.log(res.data.result);
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

  // handle input changes for typing message
  const handleInputChanges = (e) => {
    setIsImageUpload(false);
    const inputValue = e.target.value;
    const data = {
      senderName: currentUser && currentUser[0].username,
      senderId: currentUser && currentUser[0]._id,
      receiverId: friendInfo._id ? friendInfo._id : friendInfo.id,
      message: inputValue,
    };
    // send data to socket
    socket.current.emit("typingMessage", data);
  };

  // set emoji
  const handleEmojiPicker = (emoji) => {
    if (emoji?.native) {
      setIsShowEmoji(!isShowEmoji);
      setEmoji(emoji.native);
    }
  };

  // handle Keypress Event
  const handleKeypressEvent = (e) => {
    if (e.key === "Enter") {
      document.getElementById("message").click();
      // emty typing message
      socket.current.emit("typingMessage", {
        senderName: currentUser && currentUser[0].username,
        senderId: currentUser && currentUser[0]._id,
        receiverId: friendInfo._id ? friendInfo._id : friendInfo.id,
        message: "",
      });
    }
  };

  return (
    <form onSubmit={addMessage} className="m-2 relative">
      <textarea
        className="w-full text-black border rounded-lg p-2 outline-secondary focus:outline focus:outline-accent"
        placeholder={emoji ? "" : "Message"}
        onChange={handleInputChanges}
        onKeyPress={handleKeypressEvent}
        name="msg"
        id="msg"
        cols="30"
        rows="4"
      ></textarea>

      <div className="absolute top-5 left-3 text-xl">{emoji && emoji}</div>

      {/* -------emoji section-------------- */}
      <div className="absolute right-3 bottom-14 text-xl cursor-pointer">
        <div
          className="text-primary font-bold"
          onClick={() => setIsShowEmoji(!isShowEmoji)}
        >
          {isShowEmoji ? <AiOutlineCloseCircle size={25} /> : <span>😍</span>}
        </div>

        <div>
          {isShowEmoji && (
            <Picker
              data={data}
              onEmojiSelect={(emoji) => handleEmojiPicker(emoji)}
            />
          )}
        </div>
      </div>

      <div className="flex justify-end items-center gap-3 text-slate-400">
        {/* ---------attach file------------ */}
        <span className="text-xl">
          <label className="cursor-pointer" htmlFor="attachment">
            <RiAttachment2 />
          </label>
          <input
            onChange={handleImage}
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
