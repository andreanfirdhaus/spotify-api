import React from "react";

function Login() {
    const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
    const REDIRECT_URI = "http://localhost:5173/dashboard";
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    const RESPONSE_TYPE = "token";
    const SCOPE =
        "streaming%20user-read-email%20user-read-private%20user-read-playback-state%20user-modify-playback-state";

    return (
        <div>
            <div>
                <div className="grid grid-cols-1 gap-10 place-content-center h-screen">
                    <img
                        src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
                        className="w-1/4 mx-auto"
                        alt="spotify"
                    />
                    <h1 className="font-bold text-3xl sm:text-4xl tracking-normal text-center text-white">
                        Login for Musical Bliss
                    </h1>
                    <p className="font-medium text-lg sm:text-4xl capitalize tracking-normal text-center -mt-6">
                        Dive into an endless musical world. <br /> Start your
                        musical journey <br /> with Spotify.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`}
                            className="btn btn-wide hover:glass"
                        >
                            login
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
