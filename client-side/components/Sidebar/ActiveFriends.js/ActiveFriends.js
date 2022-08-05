import image from "../../../public/images/test.png";
import ActiveFriend from "./ActiveFriend";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUserInfo } from "../../../features/user/userSlice";

const ActiveFriends = () => {
  const [isActive, setIsActive] = useState("");
  const dispatch = useDispatch();

  // -----------dispatch & handle active friend----------------
  const handleActiveFriend = ({ _id: id, username, email, photo }) => {
    setIsActive(id);
    const userInfo = { id, username, email, photo };
    dispatch(addUserInfo(userInfo));
  };

  const activeFriends = [
    {
      _id: 1,
      username: "shamim1",
      email: "shamim1@gmail.com",
      photo: image,
    },
    {
      _id: 2,
      username: "shamim2",
      email: "shamim2@gmail.com",
      photo: image,
    },
    {
      _id: 3,
      username: "shamim3",
      email: "shamim3@gmail.com",
      photo: image,
    },
    {
      _id: 4,
      username: "shamim1",
      email: "shamim1@gmail.com",
      photo: image,
    },
    {
      _id: 5,
      username: "shamim1",
      email: "shamim1@gmail.com",
      photo: image,
    },
    {
      _id: 6,
      username: "shamim1",
      email: "shamim1@gmail.com",
      photo: image,
    },
    {
      _id: 7,
      username: "shamim1",
      email: "shamim1@gmail.com",
      photo: image,
    },
    {
      _id: 8,
      username: "shamim1",
      email: "shamim1@gmail.com",
      photo: image,
    },
  ];
  return (
    <div className="flex overflow-x-auto px-2 pt-2">
      {activeFriends.map((activeFriend) => (
        <div className="m-2" onClick={() => handleActiveFriend(activeFriend)}>
          <ActiveFriend
            key={activeFriend._id}
            activeFriend={activeFriend}
            isActive={isActive}
          ></ActiveFriend>
        </div>
      ))}
    </div>
  );
};

export default ActiveFriends;
