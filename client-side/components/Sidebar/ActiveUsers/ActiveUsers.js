import ActiveUser from "./ActiveUser";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserInfo } from "../../../features/user/userSlice";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const ActiveFriends = () => {
  const [isActive, setIsActive] = useState("");
  const dispatch = useDispatch();
  const activeUsers = useSelector((state) => state.activeUser.activeUser);
  const [user] = useAuthState(auth);
  const [fliterActiveUsers, setFliterActiveUsers] = useState([]);

  // filter current user from active user
  useEffect(() => {
    console.log("Hang");
    const filterUsers = activeUsers?.filter((au) => au.email !== user?.email);
    setFliterActiveUsers(filterUsers);
  }, [activeUsers]);

  // -----------dispatch & handle active friend----------------
  const handleActiveUser = ({ _id: id, username, email, photo }) => {
    setIsActive(id);
    const userInfo = { id, username, email, photo };
    dispatch(addUserInfo(userInfo));
  };

  return (
    <div className="flex overflow-x-auto px-2 pt-2">
      {fliterActiveUsers?.map((activeUser) => (
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
