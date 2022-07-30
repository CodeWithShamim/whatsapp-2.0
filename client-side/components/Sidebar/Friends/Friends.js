import { useState } from "react";
import image from "../../../public/images/activeFriend.png";
import Friend from "./Friend";

const Friends = () => {
  const [select, setSelect] = useState(1);

  const friends = [
    {
      _id: 1,
      name: "shamim",
      image: image,
    },
    {
      _id: 2,
      name: "shamim",
      image: image,
    },
    {
      _id: 3,
      name: "shamim",
      image: image,
    },
    {
      _id: 4,
      name: "shamim",
      image: image,
    },
    {
      _id: 5,
      name: "shamim",
      image: image,
    },
    {
      _id: 6,
      name: "shamim",
      image: image,
    },
    {
      _id: 7,
      name: "shamim",
      image: image,
    },
    {
      _id: 8,
      name: "shamim",
      image: image,
    },
  ];
  return (
    <div className="h-screen overflow-y-auto p-2">
      {friends.map((friend) => (
        <div onClick={() => setSelect(friend._id)} key={friend._id}>
          <Friend friend={friend} select={select}></Friend>
        </div>
      ))}
    </div>
  );
};

export default Friends;
