import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useLoaderData } from 'react-router-dom';
import AppliedJobs from '../AppliedJobs/AppliedJobs';


const AppliedJobsPage = () => {
    const appliedJobsData = useLoaderData();

    return (
        <>
            <header>
                <Header>Applied Jobs</Header>
            </header>
            <section>
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