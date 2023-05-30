import React from "react";
import axios from "axios";
import { IoSearch, IoEllipsisVerticalOutline } from "react-icons/io5";

function Search() {
    const [search, setSearch] = React.useState("");
    const [searchResult, setSearchResult] = React.useState([]);

    const fetchSearch = async () => {
        try {
            const response = await axios.get(
                "https://api.spotify.com/v1/search",
                {
                    headers: {
                        Authorization: `Bearer ${window.localStorage.getItem(
                            "token"
                        )}`,
                    },
                    params: {
                        q: search,
                        type: "album,show,artist",
                        limit: 10,
                    },
                }
            );

            const { albums, shows, artists, playlists } = response.data;

            // if (albums.items.length > 0) {
            //     console.log("Albums:");
            //     console.log(albums.items);
            // }

            // if (tracks.items.length > 0) {
            //     console.log("Tracks:");
            //     console.log(tracks.items);
            // }

            // if (artists.items.length > 0) {
            //     console.log("Artists:");
            //     console.log(artists.items);
            // }

            // 10 data dari 3 jenis (album, show, artist) dijadikan satu array
            const combinedResultData = [
                ...albums.items.slice(0, 10),
                ...shows.items.slice(0, 5),
                ...artists.items.slice(0, 5),
            ];
            console.log(combinedResultData);
            // setSearchResult(combinedResultData.slice(0, 20));
            setSearchResult(combinedResultData.sort(() => Math.random() - 0.5));
        } catch (error) {
            console.log(error);
        }
    };

    const handleInputChange = (event) => {
        setSearch(event.target.value); // Memperbarui nilai state search saat input berubah
    };

    const handleSearch = () => {
        fetchSearch(); // Memanggil fungsi fetchSearch saat tombol pencarian ditekan
    };

    React.useEffect(() => {
        fetchSearch();
    }, []);

    return (
        <div>
            <div className="container mx-auto px-4">
                <div className="form-control w-full max-w-xs pt-14">
                    <label className="label">
                        <span className="label-text text-2xl text-white font-bold tracking-wide">
                            Search
                        </span>
                    </label>
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                        value={search} // Nilai input terkait dengan state search
                        onChange={handleInputChange} // Memanggil fungsi handleInputChange saat input berubah
                        onKeyUp={handleSearch} // Memanggil fungsi handleSearch saat pengguna mengetikkan huruf
                    />
                </div>
            </div>
            <section>
                <div className="pt-10">
                    <h1 className="container mx-auto px-4 font-bold tracking-wide capitalize pb-2">
                        featuring {search}
                    </h1>

                    {/* mapping fetch data */}
                    {searchResult.map((item) => {
                        return (
                            <div>
                                {" "}
                                <div
                                    className="container mx-auto px-4 w-full flex justify-between items-center py-1.5 hover:bg-zinc-800"
                                    key={item.id}
                                >
                                    <div className="w-10 h-10 flex items-center justify-center">
                                        {item.type === "artist" && (
                                            <img
                                                src={item.images[2].url}
                                                alt=""
                                                className=""
                                            />
                                        )}
                                        {item.type === "album" && (
                                            <img
                                                src={item.images[2].url}
                                                alt=""
                                                className=""
                                            />
                                        )}
                                        {item.type === "show" && (
                                            <img
                                                src={item.images[2].url}
                                                alt=""
                                                className=""
                                            />
                                        )}
                                    </div>
                                    <div className="flex flex-col shrink w-full px-3">
                                        <h1 className="font-medium text-base text-white flex items-center">
                                            {item.name}{" "}
                                            <span className="px-2">
                                                {item.type === "artist" && (
                                                    <svg
                                                        role="img"
                                                        height="16"
                                                        width="16"
                                                        aria-hidden="true"
                                                        viewBox="0 0 24 24"
                                                        data-encore-id="icon"
                                                        className="fill-current text-blue-500"
                                                    >
                                                        <path d="M10.814.5a1.658 1.658 0 0 1 2.372 0l2.512 2.572 3.595-.043a1.658 1.658 0 0 1 1.678 1.678l-.043 3.595 2.572 2.512c.667.65.667 1.722 0 2.372l-2.572 2.512.043 3.595a1.658 1.658 0 0 1-1.678 1.678l-3.595-.043-2.512 2.572a1.658 1.658 0 0 1-2.372 0l-2.512-2.572-3.595.043a1.658 1.658 0 0 1-1.678-1.678l.043-3.595L.5 13.186a1.658 1.658 0 0 1 0-2.372l2.572-2.512-.043-3.595a1.658 1.658 0 0 1 1.678-1.678l3.595.043L10.814.5zm6.584 9.12a1 1 0 0 0-1.414-1.413l-6.011 6.01-1.894-1.893a1 1 0 0 0-1.414 1.414l3.308 3.308 7.425-7.425z"></path>
                                                    </svg>
                                                )}{" "}
                                            </span>
                                        </h1>
                                        <h1>
                                            {/* logika, ketika typenya adalah artist maka tampilkan artist saja, dan bila bukan artist maka tampilkan type yang ada dan diikuti nama */}
                                            {item.type === "artist"
                                                ? "artist"
                                                : `${item.type} • ${
                                                      item.name.length > 20
                                                          ? `${item.name.substring(
                                                                0,
                                                                20
                                                            )}` +
                                                            (" " + ".").repeat(
                                                                3
                                                            )
                                                          : item.name
                                                  } `}
                                        </h1>
                                    </div>
                                    <div>
                                        <IoEllipsisVerticalOutline size={23} />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}

export default Search;
