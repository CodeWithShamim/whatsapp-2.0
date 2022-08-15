import Image from "next/image";
import { useSelector } from "react-redux";

const Friend = ({ friend, select }) => {
  const { _id, username, photo } = friend;
  const messages = useSelector((state) => state.message.message);

  return (
    <div
      className={`flex gap-4 justify-start items-center px-2 py-4 rounded border border-b-0 cursor-pointer ${
        select === _id && "bg-primary text-secondary"
      }`}
    >
      <Image
        src={photo}
        alt={username}
        height={60}
        width={60}
        // layout="fill"
        objectFit="cover"
        className="rounded-full"
      />
      <div className="flex flex-col gap-2 justify-center">
        <h2 className="font-semibold">{username}</h2>
        {/* ----lase message---------- */}
        {/* <p>{[...messages].reverse()[0]?.message.text}</p> */}
      </div>
    </div>
  );
};

export default Friend;
