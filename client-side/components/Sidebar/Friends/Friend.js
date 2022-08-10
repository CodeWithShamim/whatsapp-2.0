import Image from "next/image";

const Friend = ({ friend, select }) => {
  const { _id, username, photo } = friend;

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
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing</p>
      </div>
    </div>
  );
};

export default Friend;
