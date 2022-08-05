const ActiveFriend = ({ activeFriend, isActive }) => {
  const { _id, username, email, photo } = activeFriend;

  return (
    <div className="relative w-full cursor-pointer flex flex-col gap-2">
      <img
        className={`w-16 h-14 rounded-full border-2 ${
          isActive === _id && "border-accent"
        }`}
        src="images/test.png"
        alt={username}
      />
      <span className="absolute right-0 badge badge-xs badge-accent"></span>
      <p className="text-sm">{username}</p>
    </div>
  );
};

export default ActiveFriend;
