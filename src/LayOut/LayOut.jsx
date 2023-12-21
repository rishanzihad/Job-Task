import { Outlet } from "react-router-dom";
import NavBar from "../Page/Shared/Navbar/Navbar";
import { Toaster } from "react-hot-toast";



const LayOut = () => {
    return (
        <div className="max-w-[1200px] mx-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Toaster/>
        </div>
    );
};

export default LayOut;