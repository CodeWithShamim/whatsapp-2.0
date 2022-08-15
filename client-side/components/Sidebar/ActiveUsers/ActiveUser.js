import Image from "next/image";

const ActiveFriend = ({ activeFriend, isActive }) => {
  const { _id, username, email, photo } = activeFriend;

  return (
    <div className="w-full cursor-pointer flex flex-col gap-2">
      <div
        className={`relative w-16 h-16 rounded-full border-2 ${
          isActive === _id && "border-accent"
        }`}
      >
        {activeFriend && (
          <Image
            src={photo || "/images/default.jpg"}
            alt={username}
            height={70}
            width={70}
            placeholder="blur"
            blurDataURL={photo || "/images/default.jpg"}
            objectFit="cover"
            className="rounded-full"
          />
        )}
        <span className="absolute bottom-0 right-1 border border-secondary badge badge-xs badge-accent"></span>
      </div>
      {/* <p className="text-sm">{username}</p> */}
    </div>
  );
};

export default ActiveFriend;
