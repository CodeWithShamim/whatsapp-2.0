import axios from "axios";
import { useEffect, useState } from "react";
import Friend from "./Friend";
import { useDispatch } from "react-redux";
import { addUserInfo } from "../../../features/user/userSlice";

const Friends = () => {
  const [friends, setFriends] = useState([]);
  const [select, setSelect] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getFriends = async () => {
      try {
        const { data } = await axios("http://localhost:5000/users");
        const getfriendLists = data.result.reverse();
        setFriends(getfriendLists);
        setSelect(getfriendLists[0]._id);
      } catch (error) {
        console.log(error);
      }
    };
    getFriends();
  }, []);

  const handleFriend = ({ _id: id, username, email, photo }) => {
    setSelect(id);
    // ------------------
    const userInfo = { id, username, email, photo };
    dispatch(addUserInfo(userInfo));
  };

  return (
    <div className="h-screen overflow-y-auto p-2">
      {friends?.map((friend) => (
        <div onClick={() => handleFriend(friend)} key={friend._id}>
          <Friend friend={friend} select={select}></Friend>
        </div>
      ))}
    </div>
  );
};

export default Friends;
