// import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../provider/AuthProvider';
import { useContext } from "react";
import Swal from 'sweetalert2';





const AddTourists = () => {

    const { user } = useContext(AuthContext)
    
    const handleAddFood = e => {
        e.preventDefault();

        const form = e.target;
        const food_name = form.foodName.value;
        const food_image = form.foodImage.value;
        const food_quantity = parseInt(form.food_quantity.value);


        const email = user.email;
        const name = user.displayName;
        const image = user.photoURL;


        const pickup_location = form.pickupLocation.value;
        const expired_datetime = form.expiredDateTime.value;
        const additional_notes = form.additionalNotes.value;
        const food_status = form.foodStatus.value;

        const donator = {
            email: email,
            name: name,
            image: image
        };

        const allFood = {  food_name, food_image, food_quantity, food_status, additional_notes, expired_datetime, pickup_location, donator }


        console.log(allFood);

        //send data to the server
        fetch('https://food-server-phi.vercel.app/allFood', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allFood)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Good job!",
                        text: "New Food Added Successfully!",
                        icon: "success"
                      });
                }
            })
    }


    return (
        <form onSubmit={handleAddFood}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>ShareBites | Add Food</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            {/* donator or user logged info */}
            <div>
                <h1 className="font-bold text-5xl my-11 text-center">Add Your <span className="text-[#40D99E] ">Food</span></h1>
            </div>

            <div className="flex items-center justify-center">
                <div className="card w-60 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={user.photoURL} alt="Shoes" className="rounded-xl h-40 w-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <p className="font-bold">Name : {user.displayName}</p>
                        <h2 className="font-bold">Email : {user.email}</h2>

                    </div>
                </div>
            </div>



            {/* form row name & img */}
            <div className="md:flex gap-2">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Food Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Food Name" name="foodName" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Food Image Url</span>
                    </label>
                    <label className="input-group">
                        <input type="url" placeholder="Food Image url" name="foodImage" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>


            {/* food quantity food pick up*/}
            <div className="md:flex gap-2">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Quantity</span>
                    </label>
                    <label className="input-group">
                        <input type="number" placeholder="Quantity" name="food_quantity" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Pickup Location</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Pickup Location" name="pickupLocation" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>


            {/* expire & addition  */}
            <div className="md:flex gap-2">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Expire Date</span>
                    </label>
                    <label className="input-group">
                        <input type="datetime-local" placeholder="Expire Date" name="expiredDateTime" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Additional Note</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Additional Note" name="additionalNotes" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>


            {/* req date & pick up location */}
            <div className="md:flex gap-2">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Food Status </span>
                    </label>
                    <label className="input-group">
                        <input type="text" defaultValue="Available" name="foodStatus" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>

            <input type="submit" value="Add Food" className="btn btn-block bg-[#3FCDA6]  mt-7 text-white" />
        </form>
    );
};


export default AddTourists;