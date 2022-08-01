import axios from "axios";
import { useEffect, useState } from "react";
import Friend from "./Friend";

const Friends = () => {
  const [friends, setFriends] = useState([]);
  const [select, setSelect] = useState("");

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

  return (
    <div className="h-screen overflow-y-auto p-2">
      {friends?.map((friend) => (
        <div onClick={() => setSelect(friend._id)} key={friend._id}>
          <Friend friend={friend} select={select}></Friend>
        </div>
      ))}
    </div>
  );
};

export default Friends;
