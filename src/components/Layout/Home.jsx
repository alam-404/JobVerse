import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
const Home = () => {
    return (
        <>
        <div>
            <Outlet />
        </div>
        <div className="relative h-64 bg-black">
            <Footer />
        </div>
        </>
    );
};

export default Home;