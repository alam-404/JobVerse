import { Outlet } from "react-router-dom";

// import components
import Footer from "../Footer/Footer";
import HomeHeader from "../Header/HomeHeader";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";

// Home 
const Home = () => {
    const urlLocation = window.location.pathname;

    return (
        <>
            <header className="relative">
                {/* Navbar */}
                <div className="mx-36">
                    <Navbar />
                </div>
                <div>
                    <div className="bg-gradient-to-r from-grad-l to-grad-r w-full opacity-5 h-full -z-10 top-0 left-0 absolute">
                    </div>
                    {/* Header */}
                    {/* {
                        urlLocation == '/' ? <HomeHeader /> : <Header />
                    } */}
                    <Header>
                        <HomeHeader/>
                    </Header>
                </div>
            </header>
            <div>
                <Outlet />
            </div>
            {/* Footer */}
            <div className="mt-28">
                <Footer />
            </div>
        </>
    );
};

export default Home;