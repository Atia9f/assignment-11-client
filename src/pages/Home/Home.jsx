import { Link } from "react-router-dom";

import Header from "../Shared/Header/Header";
import Guest from "../Guest";
import { Helmet } from "react-helmet-async";
import TouristSpots from "./FeaturedFoodsCard";
import { Typewriter } from "react-simple-typewriter";
import BestOffer from "../BestOffer";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
   
    const [food, setFood] = useState([]);

    const { data } = useQuery({
        queryKey: ['users'],
        queryFn: () =>
            fetch('https://food-server-phi.vercel.app/allfoods').then((res) =>
                res.json(),
            ),
    });

    useEffect(() => {
        if (data) {
          setFood(data)
        }
    }, [data]);


    const sixItems = food.slice(0, 6);
    return (
        <div>
             <Helmet>
                <meta charSet="utf-8" />
                <title>ShareBites | Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Header></Header>


            <div>
                <h1 className="text-center font-extrabold text-4xl mb-12 mt-[100px]">
                <Typewriter
                    words={['Featured Foods']}
                    loop={2}
                    
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}

                />
                    </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">

                    {
                        sixItems.map(aPlace => <TouristSpots key={aPlace._id} food={aPlace}></TouristSpots>)
                    }
                </div>
                <div className="text-center my-10">
                <Link to="allFood">
                    <button className="bg-[#3FCDA6] text-black btn rounded  hover:bg-ghost">Show All Food</button>
                </Link>

            </div>
            </div>
                <BestOffer></BestOffer>

            <Guest></Guest>
        </div>
    );
};

export default Home;