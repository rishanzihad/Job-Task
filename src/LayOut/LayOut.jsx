import { Outlet } from "react-router-dom";
import NavBar from "../Page/Shared/Navbar/Navbar";


const LayOut = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default LayOut;