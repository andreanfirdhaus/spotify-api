import React, { useState, useEffect } from "react";
import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Header() {
    const [hideText, setHideText] = useState(false);
    const navigate = useNavigate();

    const btnLogout = () => {
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("tokenType");
        window.localStorage.removeItem("expiresIn");
        navigate("/");
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setHideText(true);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <div>
                <p
                    className={`px-4 pt-2 font-thin tracking-wider ${
                        hideText ? "hidden" : ""
                    }`}
                >
                    good morning,
                </p>
                <div className="flex justify-between container mx-auto px-4 py-2.5 fixed">
                    <div className="flex justify-center items-center">
                        <div className="avatar online ">
                            <div className="w-8 rounded-full">
                                <img src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png" />
                            </div>
                        </div>
                        <div className="text-green-500 font-bold tracking-normal text-lg capitalize ml-3">
                            Spotify
                        </div>
                    </div>
                    <div className="flex justify-center align-center text-white">
                        <IoNotificationsOutline size={23} />
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0}>
                                <IoSettingsOutline size={23} className="ml-3" />
                            </label>
                            <ul
                                tabIndex={0}
                                className="dropdown-content menu p-0 shadow bg-base-100 rounded-box w-36 mt-2"
                            >
                                <li>
                                    <a onClick={btnLogout}>logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
