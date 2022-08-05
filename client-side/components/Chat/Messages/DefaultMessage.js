import { useSelector } from "react-redux";

const DefaultMessage = () => {
  const fdDefaultMsg = useSelector((state) => state.user.userInfo);
  return (
    <div className="h-full text-center">
      <img
        className="w-24 h-24 rounded-full mx-auto m-5"
        src={fdDefaultMsg.photo}
        alt="friendImg"
      />
      <h2 className="font-semibold text-base">
        Hello, <span className="text-purple-500">{fdDefaultMsg.username}</span>
      </h2>
      <p className="py-4 text-accent">Let's start your message</p>
    </div>
  );
};

export default DefaultMessage;
