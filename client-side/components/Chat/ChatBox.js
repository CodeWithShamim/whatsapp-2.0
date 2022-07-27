import { HiOutlineArrowCircleRight } from "react-icons/hi";
import { RiAttachment2 } from "react-icons/ri";

const ChatBox = () => {
  return (
    <div className="">
      <textarea
        className="w-full border focus:border-0 rounded-xl p-2 outline-secondary focus:outline focus:outline-accent"
        placeholder="Message"
        name="msg"
        id="msg"
        cols="30"
        rows="3"
      ></textarea>
      <div className="flex justify-end items-center gap-3">
        <span className="text-xl cursor-pointer">
          <RiAttachment2 />
        </span>

        <span className="text-3xl text-primary cursor-pointer">
          <HiOutlineArrowCircleRight />
        </span>
      </div>
    </div>
  );
};

export default ChatBox;
