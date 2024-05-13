import { useContext, useEffect, useState } from "react";
// import ManageMyRequestSingle from "./ManageMyRequestSingle";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../provider/AuthProvider";
import ManageMyRequestSingle from "../../ManageMyRequestSingle";
import Swal from "sweetalert2";

const MyFoodReq = () => {
    const { user } = useContext(AuthContext)
    const [requests, setRequest] = useState([])


    const url = `http://localhost:5000/myRequest?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setRequest(data))
    }, [])


    console.log(requests)
    
    const handleCancelConfirm = _id => {
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

                fetch(`http://localhost:5000/cancel/${_id}`, {
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
                            const remaining = requests.filter(item => item._id !== _id)
                            setRequest(remaining)
                        }
                    })

            }
        });
    }
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>ShareBites | Manage My Request</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div>
                <h1 className="text-5xl font-bold text-center my-12 ">My Requested <span className="text-[#40D99E] ">Foods</span></h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    requests.map(request => <ManageMyRequestSingle
                        key={request._id}
                        request={request}
                        handleCancelConfirm={handleCancelConfirm}
                       
                    ></ManageMyRequestSingle>)
                }
            </div>
        </div>
    );
};

export default MyFoodReq;