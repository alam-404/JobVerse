import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import JobDetails from "../JobDetails/JobDetails";

// react toastify 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JobDetailsPage = () => {

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
                {/* Header */}
                <Header>Job Details</Header>
            </header>
            <section>
                <div className="mt-44 mx-36">
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