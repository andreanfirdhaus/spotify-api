import React from "react";
import { HiHome } from "react-icons/hi2";
import { TiHeartFullOutline } from "react-icons/ti";
import { RiSearchLine } from "react-icons/ri";

function Footer() {
    return (
        <div>
            <div>
                {/* <div className="btm-nav">
                    <button>
                        <HiHome size={25} />
                    </button>
                    <button>
                        <RiSearchLine size={25} />
                    </button>
                    <button>
                        <TiHeartFullOutline size={25} />
                    </button>
                </div> */}

                <div className="fixed bottom-0 w-full bg-transparent">
                    <div className="flex justify-center pb-3">
                        <ul className="menu menu-horizontal bg-base-200 rounded-box">
                            <li>
                                <a className="hover:bg-base-200 hover:text-cyan-100 active:bg-base-200">
                                    <HiHome size={25} />
                                </a>
                            </li>
                            <li className="px-10">
                                <a className="hover:bg-base-200 hover:text-cyan-100 active:bg-base-200">
                                    <RiSearchLine size={25} />
                                </a>
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
