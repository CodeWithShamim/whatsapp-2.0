import axios from "axios";
import { useEffect, useState } from "react";
import Friend from "./Friend";
import { useDispatch } from "react-redux";
import { addUserInfo } from "../../../features/user/userSlice";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Friends = ({ searchValue }) => {
  const [friends, setFriends] = useState([]);
  const [select, setSelect] = useState("");
  const dispatch = useDispatch();
  const [user, loading] = useAuthState(auth);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const getFriends = async () => {
      try {
        const { data } = await axios(
          "https://whatsapp-new-2-0.herokuapp.com/users"
        );
        const getFriendLists = data.result.reverse();

        // -------filter current user from all user---------
        const filterFriendLists = getFriendLists.filter(
          (getFriendList) => getFriendList.email !== user?.email
        );
        setFriends(filterFriendLists);
        setSelect(filterFriendLists[0]._id);
        // dispatch(addUserInfo(filterFriendLists[0]));
        setTimeout(() => {
          dispatch(addUserInfo(filterFriendLists[0]));
        }, 1000);
      } catch (error) {
        console.log(error);
      }
    };
    getFriends();
  }, []);

  // -----------dispatch & handle frien info----------------
  const handleFriend = ({ _id: id, username, email, photo }) => {
    setSelect(id);
    const userInfo = { id, username, email, photo };
    dispatch(addUserInfo(userInfo));
  };

  // -------------handle search---------------
  useEffect(() => {
    const handleSearch = (value) => {
      const getSearchResult = friends.filter(
        (friend) => friend?.username?.toLowerCase()?.indexOf(value) !== -1
      );
      setSearchResult(getSearchResult);
    };
    handleSearch(searchValue);
  }, [searchValue]);

  return (
    <div className="h-screen overflow-y-auto p-2">
      {!searchResult?.length > 0 &&
        friends?.map((friend) => (
          <div onClick={() => handleFriend(friend)} key={friend._id}>
            <Friend friend={friend} select={select}></Friend>
          </div>
        ))}

      {/* -------maping for search result-------- */}
      {searchResult &&
        searchResult?.map((friend) => (
          <div onClick={() => handleFriend(friend)} key={friend._id}>
            <Friend friend={friend} select={select}></Friend>
          </div>
        ))}
    </div>
  );
};

export default Friends;
