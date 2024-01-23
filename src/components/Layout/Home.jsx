// import components
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import HomeHeader from "../Header/HomeHeader";
import JobCategory from "../JobCategory/JobCategory";
import FeatureJobs from "../FeatureJobs/FeatureJobs";

// Home 
const Home = () => {

    return (
        <>
            <header className="mx-36">
                <HomeHeader />
            </header>
            <section>
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