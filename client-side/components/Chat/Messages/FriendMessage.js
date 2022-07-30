import { RiMoreLine } from "react-icons/ri";

const FriendMessage = ({ friendMsg }) => {
  const { message, date } = friendMsg;
  return (
    <div>
      <div className="flex gap-1 items-center">
        <p className="bg-gray-200 px-4 py-6 rounded-xl">{message}</p>
        {/* ----morevertIcon---- */}
        <p className="text-sm cursor-pointer">
          <RiMoreLine />
        </p>
      </div>
      <p className="text-bold text-gray-400">{date}</p>
    </div>
  );
};

export default FriendMessage;
