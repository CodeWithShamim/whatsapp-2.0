import img from "../../../public/images/activeFriend.png";

const Attachments = () => {
  const attachments = [img, img, img, img, img, img];
  return (
    <div className="mx-6 md:mx-10 lg:mx-16 my-10 md:my-10 lg:my-12">
      <div className="flex justify-between items-center">
        <h2 className="text-base">Attachments ({attachments?.length})</h2>
        <button className="text-accent font-medium hover:text-primary">
          View all
        </button>
      </div>
      <hr className="my-3 lg:my-6" />

      {/* --------set attachments image--------- */}
      <div className="grid grid-cols-3 gap-3">
        {attachments?.map((img) => (
          <img
            className="w-20 h-24 rounded"
            src="/1.png"
            alt="attachment_image"
          />
        ))}
      </div>
    </div>
  );
};

export default Attachments;
