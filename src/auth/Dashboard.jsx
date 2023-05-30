import React, { useEffect } from "react";
import Header from "../components/Header";
import axios from "axios";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";

// impot lazy loading
import {
    LazyLoadImage,
    trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Dashboard() {
    const [token, setToken] = React.useState("");
    const [tokenType, setTokenType] = React.useState("");
    const [expiresIn, setExpiresIn] = React.useState("");
    const [album, setAlbum] = React.useState([]);

    const fetchAlbums = async () => {
        const response = await axios
            .get("https://api.spotify.com/v1/browse/new-releases", {
                headers: {
                    Authorization: `Bearer ${window.localStorage.getItem(
                        "token"
                    )}`,
                },
                // di dalam params ini digunakan mengatur jumlah limit, country, offset pada url https://api.spotify.com/v1/browse/new-releases
                params: {
                    limit: 10,
                },
            })
            .then((response) => {
                setAlbum(response.data.albums.items);
                console.log(response.data.albums);
            })
            .catch((error) => {
                console.log(error);
            });
    };

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

        fetchAlbums();

        setToken(token);
        setTokenType(tokenType);
        setExpiresIn(expiresIn);
    }, []);

    const params = {
        slidesPerView: 1,
        spaceBetween: 18,
        centeredSlides: false,
        slidesPerGroupSkip: 1,
        grabCursor: false,
        className: "mySwiper",
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 5,
                spaceBetween: 12,
            },
            1024: {
                slidesPerView: 8,
                spaceBetween: 11,
            },
        },
    };

    return (
        <div>
            <Header />
            <section className="container mx-auto px-4 pt-16">
                <p className="capitalize font-bold text-lg">New Releases</p>
                <div className="py-3">
                    <Swiper {...params}>
                        {album.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="py-3 sm:py-5">
                                    <a href={item.href}>
                                        <LazyLoadImage
                                            effect="blur"
                                            src={item.images[0].url}
                                            alt={item.name}
                                            className="bg-contain bg-center rounded-lg drop-shadow-lg"
                                        />
                                    </a>
                                    <p className="font-medium tracking-wide">
                                        {item.artists[0].name}{" "}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </div>
    );
}

export default Dashboard;
