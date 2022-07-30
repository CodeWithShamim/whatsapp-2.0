import { AiOutlineMore } from "react-icons/ai";
import { RiMoreLine } from "react-icons/ri";

const UserMessage = ({ userMsg }) => {
  const { message, date } = userMsg;
  return (
    <div>
      <div className="flex flex-row-reverse gap-1 items-center">
        <p className="bg-primary px-4 py-6 rounded-xl text-secondary">
          {message}
        </p>
        {/* ----morevertIcon---- */}
        <p className="text-sm cursor-pointer">
          <RiMoreLine />
        </p>
      </div>
      <p className="text-bold float-right text-gray-400">{date}</p>
    </div>
  );
};

export default UserMessage;
