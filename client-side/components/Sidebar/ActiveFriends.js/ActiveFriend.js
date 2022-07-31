const ActiveFriend = ({ activeFriend }) => {
  const { name, image } = activeFriend;
  return (
    <div className="relative w-full cursor-pointer m-3 flex flex-col gap-2">
      <img className="w-14 h-14 rounded-full" src="/1.png" alt={name} />
      <span className="absolute right-0 badge badge-xs badge-accent"></span>
      <p className="text-sm">{name}</p>
    </div>
  );
};

export default ActiveFriend;
