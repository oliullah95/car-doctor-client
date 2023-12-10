import { Link } from "react-router-dom";
import logo from '../../../../../assets/logo.svg'
import { useContext } from "react";
import { AuthContext } from "../../../../../Providers/AuthProvider";


const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {})
            .catch(error => console.log(error))
    }

    const navItems = <>
        <li className="hover:bg-[#ff3811] rounded-lg"><Link className="hover:text-white" to="/">Home</Link></li>
        <li className="hover:bg-[#ff3811] rounded-lg"><Link className="hover:text-white" to="/about">About</Link></li>
        {user?.email ? <>
            <li><Link to="/bookings">My Bookings</Link></li>
            <li><button onClick={handleLogOut}>log Out</button></li>
        </> 
        : <li><Link to="/login">Login</Link></li>
        }
        {/* <li className="hover:bg-[#ff3811] rounded-lg"><Link className="hover:text-white" to="/about">Blog</Link></li>
        <li className="hover:bg-[#ff3811] rounded-lg"><Link className="hover:text-white" to="/about">Contact</Link></li> */}
    </>
    return (
        <div className="navbar bg-base-100 h-28 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <img width={70} src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn text-[#ff3811] border-[#ff3811] hover:bg-[#ff3811] hover:text-white">Appointment</button>
            </div>
        </div>
    );
};

export default NavBar;