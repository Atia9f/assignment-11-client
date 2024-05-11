import { Outlet } from "react-router-dom";
import Nav from "../pages/Shared/Navbar/Nav";
import Footer from "../pages/Footer";

const Root = () => {
    return (
        <div className="">
            <div className="max-w-6xl mx-auto font-poppins ">
                <Nav></Nav>
                <Outlet></Outlet>
                
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;
