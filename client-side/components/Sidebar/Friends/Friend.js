const Friend = ({ friend, select }) => {
  const { _id, name, image } = friend;
  return (
    <div
      className={`flex justify-start items-center px-2 py-4 rounded border border-b-0 cursor-pointer ${
        select === _id && "bg-primary text-secondary"
      }`}
    >
      <img className="w-16 h-16 rounded-full" src="/1.png" alt={name} />
      <div className="flex flex-col items-start justify-center pl-8">
        <h2 className="font-semibold">{name}</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing</p>
      </div>
    </div>
  );
};

export default Friend;
