import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const Countries = () => {
    const [country, setCountry] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/country')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCountry(data)
            })
    }, [])
    console.log(country)
    return (
        <div className="">

            {
                country.map(c => (
                    <Link key={c._id} className="text-center" to={`/country/${c.country_Name}`}>
                        <div className="flex flex-col-reverse lg:flex-row  justify-center gap-10 items-center ">
                            <Fade>
                                <div className="mt-2 lg:mt-20 text-center">
                                    <div className="w-full lg:w-[400px]">
                                        {
                                            c.description.length > 200 ? <p>{c.description.slice(0, 200)}</p>
                                                :
                                                <p>{c.description}</p>
                                        }
                                        <div className="mt-2">
                                            <p className="text-xl font-medium text-red-500">Country Name: {c.country_Name}</p>
                                        </div>

                                    </div>
                                </div>
                            </Fade>

                            <div className="mt-20 rounded-2xl">
                                <img className=" w-full lg:w-[400px] rounded-2xl" src={c.image} alt="Shoes" />
                            </div>

                        </div>
                    </Link>
                ))
            }
        </div>
    );
};

export default Countries;