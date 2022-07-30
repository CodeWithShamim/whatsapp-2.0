import img from "../../../public/images/activeFriend.png";

const DefaultMessage = () => {
  const friendName = "Shamim";
  return (
    <div className="h-full text-center">
      <h2 className="font-semibold text-base">Hello, {friendName}</h2>
      <img className="w-20 h-20 mx-auto m-5" src={img} alt="friendImg" />
      <p className="text-left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
        ducimus tempora fugiat rem at quia alias blanditiis culpa consectetur.
        Eos alias quas corrupti nesciunt distinctio fuga aperiam magnam minus
        rerum?
      </p>
    </div>
  );
};

export default DefaultMessage;
