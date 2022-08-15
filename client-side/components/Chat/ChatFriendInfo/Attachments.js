import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Attachments = () => {
  const messages = useSelector((state) => state.message.message);
  const [allAttachments, setAllAttachments] = useState([]);
  const [sliceAttachments, setSliceAttachments] = useState([]);

  useEffect(() => {
    const getAttachmentMessages = messages.filter((msg) => msg.message.image);
    setAllAttachments(getAttachmentMessages);

    if (getAttachmentMessages.length > 6) {
      setSliceAttachments(getAttachmentMessages.slice(0, 6));
    } else {
      setSliceAttachments(getAttachmentMessages);
    }
  }, [messages]);

  return (
    <div className="mx-6 md:mx-10 lg:mx-12 my-10 md:my-10 lg:my-12">
      <div className="flex justify-between items-center">
        <h2 className="text-base">Attachments ({allAttachments?.length})</h2>
        <button
          onClick={() => setSliceAttachments(allAttachments)}
          className="text-accent font-medium hover:text-primary"
        >
          View all
        </button>
      </div>
      <hr className="my-3 lg:my-6" />

      {/* --------set attachments image--------- */}
      <div className="grid grid-cols-3 gap-5">
        {sliceAttachments?.map((attachment) => (
          <div key={attachment._id} className="w-20 h-24 rounded">
            <Image
              src={attachment.message.image}
              height={160}
              width={120}
              objectFit="cover"
              alt="attachments-img"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Attachments;
