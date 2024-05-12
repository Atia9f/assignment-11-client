import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import userPic from "../../../assets/user.png"
import '../../../App.css'

const Nav = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isHovered, setIsHovered] = useState(false);
    const [isChecked, setIsChecked] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);

    const handleSingOut = () => {
        logOut()
            .then()
            .catch()
    }

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };


    useEffect(() => {

        const storedTheme = localStorage.getItem('theme');
        if (storedTheme !== null) {
            setIsChecked(storedTheme === 'light');
        }
        setIsLoaded(true);
    }, []);

    const handleToggle = () => {
        const newTheme = isChecked ? 'dark' : 'light';
        setIsChecked(!isChecked);
        localStorage.setItem('theme', newTheme);

        document.documentElement.classList.toggle('dark-theme', newTheme === 'dark');
    };



    const navlinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/allFood"> Available Foods</NavLink></li>
        <li><NavLink to="/addTourists"> AddFood</NavLink></li>
        <li><NavLink to="/myList">Manage My Food</NavLink></li>
        <li><NavLink to="/myReq"> My food Request</NavLink></li>
    </>

    return (
        <div className="navbar mt-10  mb-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                        {navlinks}
                        {
                            user ?
                                <button onClick={handleSingOut} className="btn bg-[#F9A51A]">Log Out</button>
                                :
                                <NavLink to="/login"><button className=" btn btn-primary">Login</button></NavLink>
                        }
                    </ul>
                </div>
                <a className=" btn-ghost text-xl font-semibold">Wanderlust Adventures</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>

            <div className="navbar-end">
                <div className=" invisible lg:visible">
                    {
                        user ?
                            <button onClick={handleSingOut} className="btn bg-[#F9A51A]">Log Out</button>
                            :
                            <NavLink to="/login"><button className=" btn btn-primary">Login</button></NavLink>
                    }
                </div>

                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div  className="w-10 rounded-full">

                        <img
                            alt="Tailwind CSS Navbar component"
                            src={user?.photoURL || userPic}
                            onMouseEnter={handleMouseEnter}
                            
                        />
                        {isHovered && user && (
                            <div onMouseLeave={handleMouseLeave}  style={{ position: 'absolute', top: '100%', left: 0, background: 'lightblue', padding: '10px', borderRadius: '5px' }}>
                                <span> {user.displayName}</span> <br />

                            </div>
                        )}

                    </div>
                    <div

                    >
                        <input
                            type="checkbox"
                            className="toggle toggle-md"
                            checked={isChecked}
                            onChange={handleToggle}
                        />
                        <span>{isLoaded ? (isChecked ? '' : '') : 'Loading...'}</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Nav;