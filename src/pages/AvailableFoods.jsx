import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import AvailableFoodsCard from "./AvailableFoodsCard";
import { useQuery } from "@tanstack/react-query";

const AvailableFoods = () => {
    const [allFoods, setAllFoods] = useState([]);
    const [sortedFoods, setSortedFoods] = useState([]);
    const [search, setSearch] = useState("");
    const [isThreeColumnLayout, setIsThreeColumnLayout] = useState(false);

    const toggleLayout = () => {
        setIsThreeColumnLayout(prevState => !prevState);
    }

    const { data} = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch('http://localhost:5000/allfood').then((res) =>
                res.json(),
            ),
    });

    useEffect(() => {
        if (data) {
            setSortedFoods(data);
            setAllFoods(data); // Set the fetched data to the state
        }
    }, [data]);

    // useEffect(() => {
    //     fetch('http://localhost:5000/allfood')
    //         .then(res => res.json())
    //         .then(data => {
    //             setAllFoods(data);
    //             setSortedFoods(data);
    //         });
    // }, []);

    // Sorting 
    const sortByExpirationDate = () => {
        const sorted = [...sortedFoods];
        sorted.sort((a, b) => new Date(a.expired_datetime) - new Date(b.expired_datetime));
        setSortedFoods(sorted);
    };

    // Handle search
    const handleSearch = e => {
        const search = e.target.value.toLowerCase(); // Convert search query to lowercase
        setSearch(search); // Update the search state

        // Filter allFoods based on the search query
        const filteredFoods = allFoods.filter(food => food.food_name?.toLowerCase().includes(search));

        // Set the filtered result as the sortedFoods state
        setSortedFoods(filteredFoods);
    };


    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>QFood | Available Food</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>


            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
                onClick={toggleLayout}
            >
                Change Layout
            </button>


            <h1 className="text-center mt-14 text-5xl font-bold">Available <span className="text-[#3FCDA6]">Foods</span></h1>
            <div className="flex justify-end mt-4">
                {/* search  */}
                <input
                    type="text"
                    placeholder="Search by food name"
                    onChange={handleSearch}
                    value={search}
                    className="border-2 border-gray-300 rounded-md p-2"
                />
                {/* sort  */}
                <button
                    onClick={sortByExpirationDate}
                    className="bg-[#3FCDA6] text-white py-2 px-4 rounded-md ml-4 hover:bg-neutral"
                >
                    Sort by Expiration Date
                </button>
            </div>
            <div className={`grid gap-4 ${isThreeColumnLayout ? 'lg:grid-cols-2' : 'md:grid-cols-3'} sm:grid-cols-1`}>
                {sortedFoods.map(allFood => <AvailableFoodsCard key={allFood._id} allFood={allFood} />
                )}
            </div>
        </div>
    );
};

export default AvailableFoods;

