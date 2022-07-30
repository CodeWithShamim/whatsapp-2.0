const ActiveFriend = ({ activeFriend }) => {
  const { name, image } = activeFriend;
  return (
    <div className="avatar online cursor-pointer m-3">
      <img className="w-16 h-16 rounded-full" src={image} alt={name} />
    </div>
  );
};

export default ActiveFriend;
