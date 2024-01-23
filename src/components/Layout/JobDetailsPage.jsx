import { useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import JobDetails from "../JobDetails/JobDetails";
import Navbar from "../Navbar/Navbar";

// react toastify 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { preloadData } from "../../utils/database";

const JobDetailsPage = () => {

    useEffect(()=>preloadData('applied_jobs', []))

    return (
        <>
            <ToastContainer position="top-center"
                autoClose={2000}
                hideProgressBar
                closeOnClick
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover={false}
                theme="light"
                transition:Zoom />

            <header>
                {/* Navbar */}
                <nav className="mx-36 relative">
                    <Navbar />
                </nav>
            </header>
            <section>
                <div className="">
                    <Header>Job Details</Header>
                </div>
                <div className="mt-32 mx-36">
                    <JobDetails />
                </div>
            </section>

            {/* Footer */}
            <footer className="mt-28">
                <Footer />
            </footer>
        </>
    );
};

export default JobDetailsPage;