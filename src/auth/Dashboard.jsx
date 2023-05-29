import React, { useEffect } from "react";
import Header from "../components/Header";

function Dashboard() {
    const [token, setToken] = React.useState("");
    const [tokenType, setTokenType] = React.useState("");
    const [expiresIn, setExpiresIn] = React.useState("");

    useEffect(() => {
        const hash = window.location.hash;
        let token = window.localStorage.getItem("token");
        let tokenType = window.localStorage.getItem("tokenType");
        let expiresIn = window.localStorage.getItem("expiresIn");

        if (!token && hash) {
            token = hash
                .substring(1)
                .split("&")
                .find((elem) => elem.startsWith("access_token"))
                .split("=")[1];

            tokenType = hash
                .substring(1)
                .split("&")
                .find((elem) => elem.startsWith("token_type"))
                .split("=")[1];

            expiresIn = hash
                .substring(1)
                .split("&")
                .find((elem) => elem.startsWith("expires_in"))
                .split("=")[1];

            window.location.hash = "";
            window.localStorage.setItem("token", token);
            window.localStorage.setItem("tokenType", tokenType);
            window.localStorage.setItem("expiresIn", expiresIn);
        }

        setToken(token);
        setTokenType(tokenType);
        setExpiresIn(expiresIn);
    }, []);

    console.log(token, tokenType, expiresIn);

    return (
        <div>
            <Header />
            <section className="container mx-auto px-4 pt-16"></section>
        </div>
    );
}

export default Dashboard;
