import image from "../../../public/images/activeFriend.png";
import ActiveFriend from "./ActiveFriend";

const ActiveFriends = () => {
  const activeFriends = [
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
    <div className="flex overflow-x-auto p-3">
      {activeFriends.map((activeFriend) => (
        <ActiveFriend
          key={activeFriend._id}
          activeFriend={activeFriend}
        ></ActiveFriend>
      ))}
    </div>
  );
};

export default ActiveFriends;
