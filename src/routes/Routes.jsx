import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../ErrorPage";
import PrivateProfile from "./PrivateProfile";
import PrivateBooking from "./PrivateBooking";
import MyList from "../pages/MyList";
import AddTourists from "../pages/AddTourists";
import MyFoodReq from "../pages/Shared/Navbar/MyFoodReq";
import ManageMyFoodsRow from "../pages/ManageMyFoodsRow";
import SingleFoodDetails from "../pages/SingleFoodDetails";
import Update from "../pages/Update";
import ManageMyRequestSingle from "../pages/ManageMyRequestSingle";
import AvailableFoods from "../pages/AvailableFoods";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/allFood',
        element: <AvailableFoods></AvailableFoods>,
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/singleFoodDetails/:id',
        element: <PrivateRoute> <SingleFoodDetails/></PrivateRoute>,
        loader: ({ params }) => fetch(`https://food-server-phi.vercel.app/allFoods/${params.id}`),        
      },
      {
        path: '/myList',
        element: <PrivateProfile><MyList></MyList></PrivateProfile>
      },
      {
        path: '/myReq',
        element: <PrivateProfile><MyFoodReq/></PrivateProfile>
      },
      {
        path: '/addTourists',
        element: <PrivateBooking><AddTourists></AddTourists></PrivateBooking>
      },
      {
        path: '/myFoodReq',
        element: <PrivateBooking><ManageMyRequestSingle></ManageMyRequestSingle></PrivateBooking>
      },
      {
        path: '/foodRow',
        element: <PrivateBooking><ManageMyFoodsRow/></PrivateBooking>
      },
      
      {
        path: '/update/:id',
        element: <PrivateBooking><Update></Update></PrivateBooking>,
        loader: ({ params }) => fetch(`https://food-server-phi.vercel.app/allfood/${params.id}`)
      }
    ]
  },
]);

export default router;