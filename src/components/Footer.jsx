import React from "react";
import { HiHome } from "react-icons/hi2";
import { TiHeartFullOutline } from "react-icons/ti";
import { RiSearchLine } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router-dom";

function Footer() {
    const checkToken = window.localStorage.getItem("token");
    // const navigate = useNavigate();

    // React.useEffect(() => {
    //     if (!checkToken) {
    //         navigate("/");
    //     } else {
    //         navigate("/dashboard");
    //     }
    // }, []);

    return (
        <div>
            <div>
                <div className="fixed bottom-0 w-full bg-transparent">
                    <div className="flex justify-center pb-3">
                        <ul className="menu menu-horizontal bg-base-200 rounded-box">
                            <li>
                                {!checkToken ? (
                                    <NavLink
                                        className={({ isActive, isPending }) =>
                                            isPending
                                                ? "pending"
                                                : isActive
                                                ? "text-green-400 bg-base-200"
                                                : "bg-base-200"
                                        }
                                        to="/"
                                    >
                                        <HiHome size={25} />
                                    </NavLink>
                                ) : (
                                    <NavLink
                                        className={({ isActive, isPending }) =>
                                            isPending
                                                ? "pending"
                                                : isActive
                                                ? "text-green-400 bg-base-200"
                                                : "bg-base-200"
                                        }
                                        to="/dashboard"
                                    >
                                        <HiHome size={25} />
                                    </NavLink>
                                )}
                            </li>
                            <li className="px-10">
                                <NavLink
                                    className={({ isActive, isPending }) =>
                                        isPending
                                            ? "pending"
                                            : isActive
                                            ? "text-green-400 bg-base-200"
                                            : "bg-base-200"
                                    }
                                    to="/search"
                                >
                                    <RiSearchLine size={25} />
                                </NavLink>
                            </li>
                            <li>
                                <a className="hover:bg-base-200 hover:text-cyan-100 active:bg-base-200">
                                    <TiHeartFullOutline size={25} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
