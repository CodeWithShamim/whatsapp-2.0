import { RiMoreLine } from "react-icons/ri";

const FriendMessage = ({ message: friendMsg, scrollRef }) => {
  const { message } = friendMsg;

  return (
    <div className="flex gap-1 items-center">
      {message.text && (
        <>
          <p
            ref={scrollRef}
            className="bg-gray-400 px-3 py-4 rounded-xl text-secondary"
          >
            {message.text}
          </p>
          <p className="text-sm cursor-pointer">
            <RiMoreLine />
          </p>
        </>
      )}

      {message.image && (
        <>
          <img
            ref={scrollRef}
            className="h-36 w-32 rounded"
            src={message?.image}
            alt="messageImg"
          />
          <p className="text-sm cursor-pointer">
            <RiMoreLine />
          </p>
        </>
      )}
      {/* <p className="text-bold text-gray-400">{date}</p> */}
    </div>
  );
};

export default FriendMessage;
