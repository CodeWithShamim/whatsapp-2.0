import Image from "next/image";

const Attachments = ({ userInfo }) => {
  const { photo, username } = userInfo;

  const attachments = [photo, photo, photo, photo, photo, photo];
  return (
    <div className="mx-6 md:mx-10 lg:mx-12 my-10 md:my-10 lg:my-12">
      <div className="flex justify-between items-center">
        <h2 className="text-base">Attachments ({attachments?.length})</h2>
        <button className="text-accent font-medium hover:text-primary">
          View all
        </button>
      </div>
      <hr className="my-3 lg:my-6" />

      {/* --------set attachments image--------- */}
      <div className="grid grid-cols-3 gap-5">
        {attachments?.map((img, index) => (
          <div key={index} className="w-20 h-24 rounded">
            <Image
              src={img}
              height={160}
              width={120}
              objectFit="cover"
              alt={username}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Attachments;
