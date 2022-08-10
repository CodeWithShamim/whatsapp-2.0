import { RiMoreLine } from "react-icons/ri";
import Image from "next/image";

const UserMessage = ({ message: userMsg, scrollRef }) => {
  const { message } = userMsg;

  return (
    <div className="flex flex-row-reverse gap-1 items-center">
      {message?.text && (
        <>
          <p
            ref={scrollRef}
            className="bg-primary px-3 py-4 rounded-xl text-secondary"
          >
            {message.text}
          </p>
          <p className="text-sm cursor-pointer">
            <RiMoreLine />
          </p>
        </>
      )}

      {message?.image && (
        <>
          <div ref={scrollRef} className="h-36 w-32">
            <Image
              src={message?.image}
              height={180}
              width={150}
              objectFit="cover"
              alt="messageImg"
              className="rounded-sm"
            />
          </div>
          <p className="text-sm cursor-pointer">
            <RiMoreLine />
          </p>
        </>
      )}
      {/* <p className="text-bold float-right text-gray-400">{date}</p> */}
    </div>
  );
};

export default UserMessage;
