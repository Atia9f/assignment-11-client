
import { useContext, useEffect, useState } from "react";
// import { useReactTable } from '@tanstack/react-table'
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import ManageMyFoodsRow from "./ManageMyFoodsRow";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";


const MyList = () => {

    const { user } = useContext(AuthContext);
    const [userFoods, setUserFoods] = useState([])

    const url = `http://localhost:5000/allAddfood?email=${user.email}`
    useEffect(() => {
        fetch(url, { credentials: 'include' })
            .then(res => res.json())
            .then(data => setUserFoods(data))
    }, [])


    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/allfood/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Place has been deleted.",
                                icon: "success"
                            });
                            const remaining = userFoods.filter(item => item._id !== _id)
                            setUserFoods(remaining)
                        }
                    })

            }
        });
    }

    return (
        <div className="overflow-x-auto">
            <Helmet>
                <meta charSet="utf-8" />
                <title>ShareBites | Manage My Food</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div>
                <h1 className="text-center my-14 font-bold text-5xl">Manage My <span className="text-[#3FCDA6]">Foods</span></h1>
            </div>

            {/* <div>
                {userFoods.map(food => (
                    <ManageMyFoodsRow
                        key={food._id}
                        food={food}
                        handleDelete={handleDelete}
                    />
                ))}
            </div> */}



            {/* Uncomment the table if you need it */}
            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Food Name & Image</th>
                            <th>Quantity</th>
                            <th>Expiration Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userFoods.map(food => (
                            <ManageMyFoodsRow
                                key={food._id}
                                food={food}
                                handleDelete={handleDelete}
                            />
                        ))}
                    </tbody>
                </table>
            </div>

            <div>
                <h1 className="text-center my-14 font-bold text-5xl">Manage Requestor <span className="text-[#3FCDA6]">Foods</span></h1>
            </div>

            <div className="flex justify-center items-center">
                <Link to="/details">
                    <button className="btn bg-[#3FCDA6] my-8">Manage</button>
                </Link>
            </div>
        </div>

    );
};


export default MyList;