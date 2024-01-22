import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
const Home = () => {
    return (
        <>
        <div>
            <Outlet />
        </div>
        <div className="mt-28">
            <Footer />
        </div>
        </>
    );
};

export default Home;