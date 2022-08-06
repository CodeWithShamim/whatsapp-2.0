import ActiveUser from "./ActiveUser";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserInfo } from "../../../features/user/userSlice";

const ActiveFriends = () => {
  const [isActive, setIsActive] = useState("");
  const dispatch = useDispatch();
  const activeUsers = useSelector((state) => state.activeUser.activeUser);

  // -----------dispatch & handle active friend----------------
  const handleActiveUser = ({ _id: id, username, email, photo }) => {
    setIsActive(id);
    const userInfo = { id, username, email, photo };
    dispatch(addUserInfo(userInfo));
  };

  console.log(activeUsers);

  return (
    <div className="flex overflow-x-auto px-2 pt-2">
      {activeUsers?.map((activeUser) => (
        <div className="m-2" onClick={() => handleActiveUser(activeUser)}>
          <ActiveUser
            key={activeUser._id}
            activeFriend={activeUser}
            isActive={isActive}
          ></ActiveUser>
        </div>
      ))}
    </div>
  );
};

export default ActiveFriends;
