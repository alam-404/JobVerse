import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useLoaderData } from 'react-router-dom';
import AppliedJobs from '../AppliedJobs/AppliedJobs';


const AppliedJobsPage = () => {
    const appliedJobsData = useLoaderData();

    return (
        <>
            <header>
                {/* Navbar */}
                <nav className="mx-36 relative">
                    <Navbar />
                </nav>
            </header>
            <section>
                <div className="">
                    <Header>Applied Jobs</Header>
                </div>
                <div className="mt-32 mx-36">
                    {
                        appliedJobsData.map(job => <AppliedJobs key={job.id} job={job} />)
                    }
                </div>
            </section>

            {/* Footer */}
            <footer className="mt-28">
                <Footer />
            </footer>
        </>
    );
};

export default AppliedJobsPage;