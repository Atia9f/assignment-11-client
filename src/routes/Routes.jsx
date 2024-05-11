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
import AllTouristSpot from "../pages/AvailableFoods";
import MyFoodReq from "../pages/Shared/Navbar/MyFoodReq";
import ManageMyFoodsRow from "../pages/ManageMyFoodsRow";
import SingleFoodDetails from "../pages/SingleFoodDetails";
import Update from "../pages/Update";
import Details from "./Details";
import ManageMyRequestSingle from "../pages/ManageMyRequestSingle";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/allfoods'),
      },
      {
        path: '/allFood',
        element: <AllTouristSpot></AllTouristSpot>,
        loader: () => fetch('http://localhost:5000/allfood')

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
        loader: ({ params }) => fetch(`http://localhost:5000/allFoods/${params.id}`),        
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
        path: '/details',
        element: <PrivateRoute><Details></Details></PrivateRoute>
      },
      {
        path: '/update/:id',
        element: <PrivateBooking><Update></Update></PrivateBooking>,
        loader: ({ params }) => fetch(`http://localhost:5000/allfood/${params.id}`)
      }
    ]
  },
]);

export default router;