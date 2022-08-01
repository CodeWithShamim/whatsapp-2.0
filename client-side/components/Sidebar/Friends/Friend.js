const Friend = ({ friend, select }) => {
  const { _id, username, photo } = friend;

  console.log(_id, select);
  return (
    <div
      className={`flex gap-4 justify-start items-center px-2 py-4 rounded border border-b-0 cursor-pointer ${
        select === _id && "bg-primary text-secondary"
      }`}
    >
      <img className="w-12 h-12 rounded-full" src={photo} alt={username} />
      <div className="flex flex-col gap-2 justify-center">
        <h2 className="font-semibold">{username}</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing</p>
      </div>
    </div>
  );
};

export default Friend;
