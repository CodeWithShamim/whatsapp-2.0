import { AiOutlineSearch } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { AiOutlineUsergroupAdd, AiOutlineSetting } from "react-icons/ai";
import { useState } from "react";
import ActiveUsers from "./ActiveUsers/ActiveUsers";
import Friends from "./Friends/Friends";

const Sidebar = () => {
  const [active, setActive] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const items = [
    { id: 1, icon: <BiUser /> },
    { id: 2, icon: <AiOutlineUsergroupAdd /> },
    { id: 3, icon: <AiOutlineSetting /> },
  ];

  const handleFriendSearch = (e) => {
    const searchParams = e.target.value;
    setSearchValue(searchParams.toLowerCase());
  };

  return (
    <div className="h-screen w-full overflow-hidden">
      <div className="flex items-center relative p-3">
        <p className="absolute text-lg p-2">
          <AiOutlineSearch />
        </p>
        <input
          type="email"
          onChange={handleFriendSearch}
          className="bg-base-200 rounded p-3 w-full text-center text-xs border outline-0 focus:border-accent"
          id="email"
          name="email"
          placeholder="Search people or Messages"
        />
      </div>

      {/* ----------nested route----------- */}
      <div className="flex justify-around items-center gap-3">
        {items.map((n) => (
          <p
            key={n.id}
            className={
              active === n.id
                ? "text-2xl p-2 rounded text-secondary bg-primary"
                : "text-2xl p-2 rounded cursor-pointer"
            }
            onClick={() => setActive(n.id)}
          >
            {n.icon}
          </p>
        ))}
      </div>

      {/* -----------------active friends-------------------- */}
      <ActiveUsers></ActiveUsers>

      {/* ---------Friends------------- */}
      <Friends searchValue={searchValue}></Friends>
    </div>
  );
};

export default Sidebar;
