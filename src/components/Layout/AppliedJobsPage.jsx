import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useLoaderData } from 'react-router-dom';
import AppliedJobs from '../AppliedJobs/AppliedJobs';

// Heroicons
import { ChevronDownIcon } from '@heroicons/react/24/outline'


const AppliedJobsPage = () => {
    const appliedJobsData = useLoaderData();

    return (
        <>
            <header>
                <Header>Applied Jobs</Header>
            </header>
            <section className='mt-32 mx-36'>
                <div className='flex justify-end'>
                    <div className='flex items-center justify-center border rounded px-3 py-2 font-medium text-dark-2 cursor-pointer'>
                        <button className='me-2'>Filter</button>
                        <ChevronDownIcon className='w-5 h-5' />
                    </div>
                </div>
                <div>
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