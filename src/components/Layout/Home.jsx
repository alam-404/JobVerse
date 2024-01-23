// import { Outlet } from "react-router-dom";

// import components
import Footer from "../Footer/Footer";
// import HomeHeader from "../Header/HomeHeader";
import Navbar from "../Navbar/Navbar";
import HomeHeader from "../Header/HomeHeader";
import JobCategory from "../JobCategory/JobCategory";
import FeatureJobs from "../FeatureJobs/FeatureJobs";

// Home 
const Home = () => {
    // const urlLocation = window.location.pathname;

    return (
        <>
            <header>
                {/* Navbar */}
                <nav className="mx-36 relative">
                    <Navbar />
                </nav>
            </header>
            <section>
                <div className="mx-36">
                    <HomeHeader />
                </div>
                <div className="static">
                    <JobCategory />
                    <FeatureJobs />
                </div>
            </section>
            
            {/* Footer */}
            <footer className="mt-28">
                <Footer />
            </footer>
        </>
    );
};

export default Home;