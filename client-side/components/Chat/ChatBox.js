import { AiFillCalendar, AiFillLayout } from "react-icons/ai";
import {
  RiAttachment2,
  RiGalleryFill,
  RiGiftFill,
  RiSendPlane2Fill,
} from "react-icons/ri";

const ChatBox = () => {
  return (
    <div className="m-2 relative">
      <textarea
        className="w-full border rounded-lg p-2 outline-secondary focus:outline focus:outline-accent"
        placeholder="Message"
        name="msg"
        id="msg"
        cols="30"
        rows="4"
      ></textarea>

      {/* -------emoji section-------------- */}
      <div className="absolute right-3 bottom-14 text-xl cursor-pointer">
        <span>
          <AiFillCalendar />
        </span>
      </div>

      <div className="flex justify-end items-center gap-3 text-slate-400">
        {/* ---------attach file------------ */}
        <span className="text-xl">
          <label className="cursor-pointer" htmlFor="attachment">
            <RiAttachment2 />
          </label>
          <input
            className="hidden"
            type="file"
            name="attachment"
            id="attachment"
          />
        </span>

        {/* -----gallery image---------- */}
        <span className="text-xl">
          <label className="cursor-pointer" htmlFor="image">
            <RiGalleryFill />
          </label>
          <input className="hidden" type="file" name="image" id="image" />
        </span>

        {/* -----gif image---------- */}
        <span className="text-xl cursor-pointer">
          <RiGiftFill />
        </span>

        <span className="text-xs text-secondary bg-primary p-[5px] rounded-full cursor-pointer">
          <RiSendPlane2Fill />
        </span>
      </div>
    </div>
  );
};

export default ChatBox;
