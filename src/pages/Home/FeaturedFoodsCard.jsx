import { Link } from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


const FeaturedFoodsCard = ({ food }) => {
  console.log(food)
    const { _id, food_name, food_image, donator: { name, image }, food_quantity, pickup_location, expired_datetime, additional_notes } = food;
    return (
       
        <div className="card card-compact bg-base-100 shadow-xl my-8">
            <figure><img className="h-56 w-full" src={food_image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{food_name}</h2>
                {/* Donator name and image */}
                <div className="flex items-center mt-2">
                    <img className="w-10 h-10 object-cover rounded-full" src={image} alt="Donator Image" />
                    <p className="ml-2 text-sm">{name}</p>
                </div>
                {/* Food quantity */}
                <p className="text-sm text-gray-500 mt-2">Serves <span className="font-bold">{food_quantity}</span> people</p>
                {/* Pick up location */}
                <p className="text-sm mt-2"><span className="font-bold">Pickup Location:</span> {pickup_location}</p>
                {/* Expired */}
                <p className="text-sm mt-2"><span className="font-bold">Expires on:</span> {new Date(expired_datetime).toLocaleString()}</p>
                {/* Additional Notes */}
                <p className="text-sm mt-2"><span className="font-bold">Additional Notes:</span> {additional_notes}</p>
                <Link to={`singleFoodDetails/${_id}`}>
                    <button className="bg-[#3FCDA6] text-white py-2 px-4 rounded mt-4 hover:bg-neutral">View Details</button>
                </Link>
            </div>

        </div>
    );
};

export default FeaturedFoodsCard;