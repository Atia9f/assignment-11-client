import { Link } from "react-router-dom";


const ManageMyFoodsRow = ({ food, handleDelete }) => {

    const { _id, food_name, food_image, food_quantity, expired_datetime, food_status } = food;




    return (
        <tr className="">
            <td>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline hover:bg-[#F87272]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={food_image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{food_name}</div>

                    </div>
                </div>
            </td>
            <td>
                <span>Serve {food_quantity} people</span>
            </td>
            <td><p><span className="font-bold">Expires on:</span> {new Date(expired_datetime).toLocaleString()}</p></td>
            <td>{food_status}</td>
            <th>
                <Link to={`/update/${_id}`}><button className="btn text-white bg-[#388FB1]">Update</button></Link>
            </th>
        </tr>
    );
};

export default ManageMyFoodsRow;