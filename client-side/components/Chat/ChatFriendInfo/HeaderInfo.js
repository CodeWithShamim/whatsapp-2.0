import img from "../../../public/images/activeFriend.png";

const HeaderInfo = () => {
  const infos = {
    img: img,
    name: "Shamim Islam",
    position: "Web-Developer",
    location: "Rangpur, Bangladesh",
  };
  const { img, name, position, location } = infos;

  return (
    <div className="text-center grid gap-2 justify-center items-center m-3">
      <img
        className="w-16 h-16 rounded-full mx-auto mt-6"
        src="/1.png"
        alt={name}
      />
      <h2 className="font-semibold">{name}</h2>
      <h2>{position}</h2>
      <p className="text-gray-400">{location}</p>
      <button className="btn btn-xs bg-gray-300 w-full font-thin px-16 lg:px-20 shadow-2xl border-0 hover:bg-primary rounded text-secondary capitalize">
        More information
      </button>
    </div>
  );
};

export default HeaderInfo;
