import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {

    const food = useLoaderData();
    const { _id, pickup_location,  food_name, food_image,  food_quantity,additional_notes, expired_datetime } = food;
console.log(food)

    const handleUpdateFood = e => {
        e.preventDefault();

        const form = e.target;
        const food_name = form.foodName.value;
        const food_image = form.foodImage.value;
        const food_quantity = parseInt(form.foodQuantity.value);

        const pickup_location = form.pickupLocation.value;
        const expired_datetime = form.expiredDateTime.value;
        const additional_notes = form.additionalNotes.value;
        const food_status = form.foodStatus.value;


        const updateFood = { food_name,  food_image, food_quantity, food_status, additional_notes, expired_datetime, pickup_location }


        console.log(updateFood);

        //send data to the server
        //send data to the server
        fetch(`https://food-server-phi.vercel.app/allFood/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateFood)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Good job!",
                        text: "Food Updated Successfully!",
                        icon: "success"
                      });
                }
            })
    }

    return (

        <form onSubmit={handleUpdateFood}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>QFood | Update</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            <div>
                <h1 className='text-center text-5xl font-bold my-16'>Update Food</h1>
            </div>


            {/* form row name & img */}
            <div className="md:flex gap-2">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Food Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Food Name" required defaultValue={food_name} name="foodName" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Food Image Url</span>
                    </label>
                    <label className="input-group">
                        <input type="url" placeholder="Food Image url" required defaultValue={food_image} name="foodImage" className="input input-bordered w-full" />
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
                        <input type="number" placeholder="Quantity" required defaultValue={food_quantity} name="foodQuantity" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Pickup Location</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Pickup Location" required defaultValue={pickup_location} name="pickupLocation" className="input input-bordered w-full" />
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
                        <input type="datetime-local" placeholder="Expire Date" required defaultValue={expired_datetime} name="expiredDateTime" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Additional Note</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Additional Note" required defaultValue={additional_notes} name="additionalNotes" className="input input-bordered w-full" />
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
                        <input type="text" defaultValue="Available" required name="foodStatus" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>

            <input type="submit" value="Update Food" className="btn btn-block bg-[#3FCDA6]  mt-7 text-white" />
        </form>
    );
};

export default Update;