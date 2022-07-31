import Attachments from "./Attachments";
import ContactInfo from "./ContactInfo";
import HeaderInfo from "./HeaderInfo";

const ChatFriendInfo = () => {
  return (
    <div className="relative text-center h-screen overflow-y-auto rounded-2xl shadow-2xl">
      {/* _______header info________ */}
      <HeaderInfo></HeaderInfo>
      {/* _______contact info________ */}
      <ContactInfo></ContactInfo>
      {/* _______attachments info________ */}
      <Attachments></Attachments>
    </div>
  );
};

export default ChatFriendInfo;
