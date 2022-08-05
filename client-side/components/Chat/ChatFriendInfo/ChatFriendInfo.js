import Attachments from "./Attachments";
import ContactInfo from "./ContactInfo";
import HeaderInfo from "./HeaderInfo";
import { useSelector } from "react-redux";

const ChatFriendInfo = () => {
  const userInfo = useSelector((state) => state.user.userInfo);
  // const { id, username, email, photo } = userInfo;

  return (
    <div className="relative text-center bg-base-100  h-screen overflow-y-auto rounded-2xl shadow-2xl shadow-gray-200">
      {/* _______header info________ */}
      <HeaderInfo userInfo={userInfo}></HeaderInfo>
      {/* _______contact info________ */}
      <ContactInfo userInfo={userInfo}></ContactInfo>
      {/* _______attachments info________ */}
      <Attachments userInfo={userInfo}></Attachments>
    </div>
  );
};

export default ChatFriendInfo;
