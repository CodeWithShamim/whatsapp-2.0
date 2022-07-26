import { AiOutlineMail, AiFillPhone, AiOutlineUser } from "react-icons/ai";

const ContactInfo = ({ userInfo }) => {
  const { id, email, username } = userInfo;

  const defaultValue = {
    phone: "(+88)01762812568",
  };

  return (
    <div className="mx-6 md:mx-10 lg:mx-12 my-6 md:my-8 lg:my-10">
      <div className="flex justify-between items-center">
        <h2 className="text-base">Contact Information</h2>
        <button className="text-accent font-medium hover:text-primary">
          Add New
        </button>
      </div>
      <hr className="my-3" />

      {/* -------------------contact info-------------------- */}
      <div className="grid gap-3">
        {/* ---email--- */}
        <div className="flex font-medium items-center gap-3">
          <span className="bg-slate-200 rounded-full p-2 text-secondary">
            <AiOutlineMail />
          </span>
          <p>{email}</p>
        </div>
        {/* ---phone--- */}
        <div className="flex font-medium items-center gap-3">
          <span className="bg-slate-200 rounded-full p-2 text-secondary">
            <AiFillPhone />
          </span>
          <p>{defaultValue.phone}</p>
        </div>
        {/* ---username--- */}
        <div className="flex font-medium items-center gap-3">
          <span className="bg-slate-200 rounded-full p-2 text-secondary">
            <AiOutlineUser />
          </span>
          <p>{username}</p>
        </div>
      </div>
      <hr className="my-4" />
    </div>
  );
};

export default ContactInfo;
