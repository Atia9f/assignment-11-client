
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";


const SingleFoodDetails = () => {
    const food = useLoaderData();
    console.log(food)
    const { _id, food_name, food_image, donator: { name, image, email }, food_status,  food_quantity, pickup_location,  expired_datetime} = food;

    const { user} = useContext(AuthContext);
   

    // console.log(user.email)
    // console.log(user.metadata.lastSignInTime)

    const handleRequestConfirm = id => {
        fetch(`https://food-server-phi.vercel.app/requested/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ food_status: 'Requested' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
               
            })
    }




    
    const handleUpdateProduct = e => {
        e.preventDefault();

        const form = e.target;
        const foodName = form.foodName.value;
        const foodImage = form.foodImage.value;
        const id = form.id.value;
        const email = form.email.value;
        const donatorName = form.donatorName.value;
        const userEmail = form.userEmail.value;
        const photoURL = form.photoURL.value;
        const displayName = form.displayName.value;
        const requestDate = form.requestDate.value;
        const pickupLocation = form.pickupLocation.value;
        const expiredDateTime = form.expiredDateTime.value;
        const donation = form.donation.value;
        const additionalNote = form.additionalNote.value;
        const food_status = form.foodStatus.value;

        const reqFood = { foodName, foodImage, id, email,  food_status, displayName, donatorName, photoURL, userEmail, requestDate, pickupLocation, additionalNote, expiredDateTime, donation }
        console.log(donation)
        console.log(donation)
        console.log(reqFood);

        //send data to the server
        //send data to the server
        fetch('https://food-server-phi.vercel.app/reqfood', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reqFood)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Good job!",
                        text: "Successfully Request!",
                        icon: "success"
                      });
                }
            })
    }



    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <meta charSet="utf-8" />
                <title>QFood | Single Food</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={food_image} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold mb-5">{food_name}</h1>
                    {/* Food quantity */}
                    <p className="text-sm mb-5 text-gray-500 mt-2">Serves <span className="font-bold">{food_quantity}</span> people</p>
                    {/* Pick up location */}
                    <p className="text-sm mt-2 mb-5"><span className="font-bold">Pickup Location:</span> {pickup_location}</p>
                    {/* Expired */}
                    <p className="text-sm mt-2 mb-5"><span className="font-bold">Expires on:</span> {new Date(expired_datetime).toLocaleString()}</p>

                    <div className="flex items-center mt-2 mb-5">
                        <p className="ml-2 text-sm font-bold mr-4">Donor: {name}</p>
                        <img className="w-20 mask mask-squircle" src={image} alt="Donator Image" />
                    </div>

                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn bg-[#3FCDA6] text-white" onClick={() => document.getElementById('my_modal_4').showModal()}>Request</button>
                    <dialog id="my_modal_4" className="modal">
                        <div className="modal-box w-11/12 max-w-5xl">
                            <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">Click the button below to close</p>
                            {/* .......................................................................................................... */}

                            <form onSubmit={handleUpdateProduct}>
                                {/* form row name & img */}
                                <div className="md:flex gap-2">
                                    <div className="form-control md:w-1/2">
                                        <label className="label">
                                            <span className="label-text">Food Name</span>
                                        </label>
                                        <label className="input-group">
                                            <input type="text" defaultValue={food-name} disabled name="foodName" className="input input-bordered w-full" />
                                        </label>
                                    </div>
                                    <div className="form-control md:w-1/2">
                                        <label className="label">
                                            <span className="label-text">Food Image</span>
                                        </label>
                                        <label className="input-group">
                                            <input type="text" disabled defaultValue={food_image} name="foodImage" className="input input-bordered w-full" />
                                        </label>
                                    </div>
                                </div>


                                {/* food id  food donator email*/}
                                <div className="md:flex gap-2">
                                    <div className="form-control md:w-1/2">
                                        <label className="label">
                                            <span className="label-text">Food ID</span>
                                        </label>
                                        <label className="input-group">
                                            <input type="text" disabled defaultValue={_id} name="id" className="input input-bordered w-full" />
                                        </label>
                                    </div>
                                    <div className="form-control md:w-1/2">
                                        <label className="label">
                                            <span className="label-text">Donator Email</span>
                                        </label>
                                        <label className="input-group">
                                            <input type="text" disabled defaultValue={email} name="email" className="input input-bordered w-full" />
                                        </label>
                                    </div>
                                </div>
                                {/* food donator name & user email */}
                                <div className="md:flex gap-2">
                                    <div className="form-control md:w-1/2">
                                        <label className="label">
                                            <span className="label-text">Donator Name</span>
                                        </label>
                                        <label className="input-group">
                                            <input type="text" disabled defaultValue={name} name="donatorName" className="input input-bordered w-full" />
                                        </label>
                                    </div>
                                    <div className="form-control md:w-1/2">
                                        <label className="label">
                                            <span className="label-text">User Email</span>
                                        </label>
                                        <label className="input-group">
                                            <input type="text" disabled defaultValue={user.email} name="userEmail" className="input input-bordered w-full" />
                                        </label>
                                    </div>
                                </div>
                                {/* req date & pick up location */}
                                <div className="md:flex gap-2">
                                    <div className="form-control md:w-1/2">
                                        <label className="label">
                                            <span className="label-text">Request Date </span>
                                        </label>
                                        <label className="input-group">
                                            <input type="text" disabled defaultValue={user.metadata.lastSignInTime} name="requestDate" className="input input-bordered w-full" />
                                        </label>
                                    </div>
                                    <div className="form-control md:w-1/2">
                                        <label className="label">
                                            <span className="label-text">Pickup Location</span>
                                        </label>
                                        <label className="input-group">
                                            <input type="text" disabled defaultValue={pickup_location} name="pickupLocation" className="input input-bordered w-full" />
                                        </label>
                                    </div>
                                </div>
                                {/* expire date & doonation money*/}
                                <div className="md:flex gap-2">
                                    <div className="form-control md:w-1/2">
                                        <label className="label">
                                            <span className="label-text">Expire Date</span>
                                        </label>
                                        <label className="input-group">
                                            <input type="text" disabled defaultValue={expired_datetime} name="expiredDateTime" className="input input-bordered w-full" />
                                        </label>
                                    </div>
                                    <div className="form-control md:w-1/2">
                                        <label className="label">
                                            <span className="label-text">Food Status </span>
                                        </label>
                                        <label className="input-group">
                                            <input type="text" disabled defaultValue={food_status} name="foodStatus" className="input input-bordered w-full" />
                                        </label>
                                    </div>
                                </div>



                                <div className="md:flex gap-2">
                                    {/* for photourl */}
                                    <div className="form-control md:w-1/2">
                                        <label className="label">
                                            <span className="label-text">User Photo URL</span>
                                        </label>
                                        <label className="input-group">
                                            <input type="text" disabled defaultValue={user.photoURL} name="photoURL" className="input input-bordered w-full" />
                                        </label>
                                    </div>
                                    {/* user name */}
                                    <div className="form-control md:w-1/2">
                                        <label className="label">
                                            <span>User Name</span>
                                        </label>
                                        <label className="input-group">
                                            <input type="text" disabled defaultValue={user.displayName} name="displayName" className="input input-bordered w-full" />
                                        </label>
                                    </div>

                                </div>

                                <div className="md:flex gap-2">
                                    {/* addition note */}
                                    <div className="form-control md:w-1/2">
                                        <label className="label">
                                            <span>Additional Note</span>
                                        </label>
                                        <label className="input-group">
                                            <input type="text" placeholder="Additional Note" name="additionalNote" className="input input-bordered w-full" />
                                        </label>
                                    </div>
                                    <div className="form-control md:w-1/2">
                                        <label className="label">
                                            <span className="label-text">Donation</span>
                                        </label>
                                        <label className="input-group">
                                            <input type="number" name="donation" className="input input-bordered w-full" />
                                        </label>
                                    </div>
                                </div>

                                <input type="submit" onClick={()=>handleRequestConfirm(_id)} value="Request Confirm" className="btn btn-block bg-[#3FCDA6]  mt-7 text-white" />
                            </form>





                            {/* ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''' */}

                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button, it will close the modal */}
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default SingleFoodDetails;