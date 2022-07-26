import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { signOut } from "firebase/auth";
import { BiLogInCircle } from "react-icons/bi";
import { ThemeContext } from "../pages";
import { useContext } from "react";
import Image from "next/image";
import { MdNotificationsNone } from "react-icons/md";
import { AiFillNotification } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

const Header = () => {
  const [user] = useAuthState(auth);
  const [theme, setTheme] = useContext(ThemeContext);
  const [notificationMessage, setNotificationMessage] = useState({});
  const getNotificationMessage = useSelector(
    (state) => state.message.notificationMessage
  );

  useEffect(() => {
    setNotificationMessage(getNotificationMessage);
  }, [getNotificationMessage]);

  return (
    <>
      {/* -----header------- */}
      <div className="h-full flex justify-between items-center gap-3 p-2 font-serif">
        <h2 className="relative text-2xl text-accent font-semibold">
          Whatspp 2.0
          <span className="absolute text-sm text-primary font-extrabold">
            Beta
          </span>
        </h2>

        <div className="flex items-center">
          {/* ---------notification-------- */}
          <div className="relative text-2xl px-3 cursor-pointer">
            {notificationMessage.message && (
              <span className="absolute right-3 bottom-5 bg-primary rounded-full w-2 h-2 text-sm font-extrabold"></span>
            )}

            {/* ----------dropdown for notification msg---------- */}
            <div className="dropdown dropdown-end">
              <label className="cursor-pointer" tabIndex="1">
                <MdNotificationsNone />
              </label>
              <ul
                tabIndex="1"
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                {/* ----------content-------- */}
                {notificationMessage.message ? (
                  <p className="text-xs font-bold text-gray-400">
                    <div className="flex items-center">
                      <span className="text-xl text-primary pr-1">
                        <AiFillNotification />
                      </span>
                      {notificationMessage?.senderName} send you{" "}
                    </div>
                    <span className="text-purple-400">
                      "
                      {notificationMessage.message?.text?.slice(0, 1000) ||
                        (notificationMessage.message?.image && "Image")}
                      "
                    </span>
                  </p>
                ) : (
                  <p className="text-xs font-bold text-gray-400">
                    <div className="flex items-center">
                      <span className="text-xl text-primary pr-1">
                        <AiFillNotification />
                      </span>
                      Nofification message not find
                    </div>
                  </p>
                )}
                {/* ---------------content end--------- */}
              </ul>
            </div>
          </div>

          {/* --------theme btn----------- */}
          <div className="mr-3 flex items-center">
            <label className="swap swap-rotate">
              <input type="checkbox" onClick={() => setTheme(!theme)} />

              {/* --sun icon-- */}
              <svg
                className="swap-on fill-current w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* -- moon icon -- */}
              <svg
                className="swap-off fill-current  w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>

          <div className="avatar online">
            <div className="w-10 rounded-md">
              {user && (
                <Image
                  src={user.photoURL || "/images/defalut.jpg"}
                  height={50}
                  width={50}
                  placeholder="blur"
                  blurDataURL={user.photoURL || "/images/defalut.jpg"}
                  objectFit="cover"
                  alt={user?.displayName}
                />
              )}
            </div>
          </div>
          {/* ---log out--- */}
          <p
            className="text-2xl pl-3 cursor-pointer text-accent hover:text-primary"
            onClick={() => signOut(auth)}
          >
            <BiLogInCircle />
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
