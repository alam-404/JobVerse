import { useEffect } from "react";

// import components
import Footer from "../Footer/Footer";
import HomeHeader from "../Header/HomeHeader";
import JobCategory from "../JobCategory/JobCategory";
import FeatureJobs from "../FeatureJobs/FeatureJobs";

import { preloadData } from "../../utils/database";


// Home 
const Home = () => {
    // Preload data
    useEffect(() => preloadData('applied_jobs', []))
    
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