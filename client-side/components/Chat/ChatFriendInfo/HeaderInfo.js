import Image from "next/image";

const HeaderInfo = ({ userInfo }) => {
  const { id, username, email, photo } = userInfo;

  const defaultValue = {
    position: "Mern Stack Developer",
    location: "Rangpur, Bangladesh",
  };

  return (
    <div className="text-center grid gap-2 justify-center items-center m-3">
      <div className="w-16 h-16 mx-auto mt-6">
        {userInfo && (
          <Image
            src={photo || "/images/defalut.jpg"}
            alt={username}
            height={80}
            width={80}
            placeholder="blur"
            blurDataURL={photo || "/images/defalut.jpg"}
            objectFit="cover"
            className="rounded-full "
          />
        )}
      </div>
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
