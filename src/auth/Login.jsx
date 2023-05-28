import React, { useEffect } from "react";
function Login() {
    const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
    const REDIRECT_URI = "http://localhost:5173/dashboard";
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    const RESPONSE_TYPE = "token";
    const SCOPE =
        "streaming%20user-read-email%20user-read-private%20user-read-playback-state%20user-modify-playback-state";

    // const code = new URLSearchParams(window.location.search).get(
    //     "access_token"
    // );

    // const [token, setToken] = React.useState("");
    // const [tokenType, setTokenType] = React.useState("");
    // const [expiresIn, setExpiresIn] = React.useState("");

    // const navigate = useNavigate();

    // useEffect(() => {
    //     const hash = window.location.hash;
    //     let token = window.localStorage.getItem("token");
    //     let tokenType = window.localStorage.getItem("tokenType");
    //     let expiresIn = window.localStorage.getItem("expiresIn");

    //     if (!token && hash) {
    //         token = hash
    //             .substring(1)
    //             .split("&")
    //             .find((elem) => elem.startsWith("access_token"))
    //             .split("=")[1];

    //         tokenType = hash
    //             .substring(1)
    //             .split("&")
    //             .find((elem) => elem.startsWith("token_type"))
    //             .split("=")[1];

    //         expiresIn = hash
    //             .substring(1)
    //             .split("&")
    //             .find((elem) => elem.startsWith("expires_in"))
    //             .split("=")[1];

    //         window.location.hash = "";
    //         window.localStorage.setItem("token", token);
    //         window.localStorage.setItem("tokenType", tokenType);
    //         window.localStorage.setItem("expiresIn", expiresIn);
    //     }

    //     setToken(token);
    //     setTokenType(tokenType);
    //     setExpiresIn(expiresIn);

    //     // if (token) {
    //     //     navigate("/dashboard", {
    //     //         state: {
    //     //             displayCode: token,
    //     //             displayTokenType: tokenType,
    //     //             displayExpiresIn: expiresIn,
    //     //         },
    //     //     });
    //     // }
    // }, []);

    return (
        <div>
            {/* {token ? (
                <Dashboard
                    displayCode={token}
                    displayTokenType={tokenType}
                    displayExpiresIn={expiresIn}
                />
                navigate("/dashboard", {
                    state: {
                        displayCode: token,
                        displayTokenType: tokenType,
                        displayExpiresIn: expiresIn,
                    },
                })
            ) : (
                <div>
                    <div className="grid grid-cols-1 gap-10 place-content-center h-screen px-7">
                        <img
                            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png"
                            className="w-2/3 mx-auto"
                            alt="spotify"
                        />
                        <h1 className="font-bold text-4xl capitalize tracking-normal text-center">
                            play the music. and let's get started
                        </h1>
                        <div className="flex justify-center">
                            <a
                                href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`}
                                className="btn hover:glass px-10"
                            >
                                login
                            </a>
                        </div>
                    </div>
                </div>
            )} */}

            {/* {token ? (
                // navigate("/dashboard")
                <h1>halo</h1>
            ) : ( */}
            <div>
                <div className="grid grid-cols-1 gap-10 place-content-center h-screen px-7">
                    <img
                        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png"
                        className="w-2/3 mx-auto"
                        alt="spotify"
                    />
                    <h1 className="font-bold text-4xl capitalize tracking-normal text-center">
                        play the music. and let's get started
                    </h1>
                    <div className="flex justify-center">
                        <a
                            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`}
                            className="btn hover:glass px-10"
                        >
                            login
                        </a>
                    </div>
                </div>
            </div>
            {/* )} */}
        </div>
    );
}

export default Login;
