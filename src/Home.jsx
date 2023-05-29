import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <div className="grid grid-cols-1 gap-10 place-content-center h-screen">
                <img
                    src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
                    className="w-1/4 mx-auto"
                    alt="spotify"
                />
                <div className="font-bold text-3xl sm:text-4xl tracking-normal text-center text-white">
                    Millions of Songs <br /> free on{" "}
                    <span className="text-green-500">
                        {" "}
                        <Link
                            to="/login"
                            className="font-bold underline underline-offset-4"
                        >
                            Spotify
                        </Link>
                    </span>
                </div>
                <p className="text-lg font-normal tracking-normal text-center -mt-6">
                    discover, play and share your <br />
                    favorite songs with your friends.
                </p>
            </div>
        </div>
    );
}

export default Home;
