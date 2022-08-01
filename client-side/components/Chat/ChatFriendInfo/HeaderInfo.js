const HeaderInfo = ({ userInfo }) => {
  const { id, username, email, photo } = userInfo;

  const defaultValue = {
    position: "Mern Stack Developer",
    location: "Rangpur, Bangladesh",
  };

  return (
    <div className="text-center grid gap-2 justify-center items-center m-3">
      <img
        className="w-16 h-16 rounded-full mx-auto mt-6"
        src={photo}
        alt={username}
      />
      <h2 className="font-semibold">{username}</h2>
      <h2>{defaultValue.position}</h2>
      <p className="text-gray-400">{defaultValue.location}</p>
      <button className="btn btn-xs bg-gray-300 w-full font-thin px-16 lg:px-20 shadow-2xl border-0 hover:bg-primary rounded text-secondary capitalize">
        More information
      </button>
    </div>
  );
};

export default HeaderInfo;
