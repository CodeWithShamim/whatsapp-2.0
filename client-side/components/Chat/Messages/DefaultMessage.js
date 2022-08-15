import { useSelector } from "react-redux";
import Image from "next/image";

const DefaultMessage = () => {
  const fdDefaultMsg = useSelector((state) => state.user.userInfo);
  return (
    <div className="h-full text-center">
      <div className="w-24 h-24 mx-auto mt-5">
        {fdDefaultMsg && (
          <Image
            src={fdDefaultMsg.photo || "/images/defalut.jpg"}
            height={80}
            width={80}
            placeholder="blur"
            blurDataURL={fdDefaultMsg.photo || "/images/defalut.jpg"}
            objectFit="cover"
            alt="friendImg"
            className="rounded-full"
          />
        )}
      </div>
      <h2 className="font-semibold">
        Hello, <span className="text-purple-500">{fdDefaultMsg.username}</span>
      </h2>
      <p className="py-4 text-accent">Let's start your message</p>
    </div>
  );
};

export default DefaultMessage;
