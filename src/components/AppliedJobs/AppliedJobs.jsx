import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';

const AppliedJobs = (props) => {
    const {
        id,
        company_logo,
        job_title,
        company_name,
        remote_or_onsite,
        fulltime_parttime,
        location,
        salary
    } = props.job;

    return (
        <div className="border-2 rounded-md my-5 hover:border-grad-l transition-colors ease-in-out duration-1000">
            <div className='flex justify-between items-center'>
                <div className="p-5 flex gap-8">
                    <div className="h-40 w-48 flex border border-white items-center justify-center  rounded-md bg-dark-7 hover:border-grad-r transition-colors ease-in-out duration-1000">
                        <img src={company_logo} className="object-cover p-2" />
                    </div>
                    <div className="my-3">
                        <h3 className="text-xl font-semibold text-dark-1 mb-2">{job_title}</h3>
                        <h5 className="text-lg text-dark-3 font-semibold">{company_name}</h5>
                        <div className="flex mt-4 items-center text-xs font-bold">
                            <div className="me-2 px-4 py-2 gradient-text border-2 rounded border-grad-l">
                                <p>{remote_or_onsite}</p>
                            </div>
                            <div className="px-4 py-2 gradient-text border-2 rounded border-grad-l">
                                <p>{fulltime_parttime}</p>
                            </div>
                        </div>
                        <div className='flex items-center text-sm mt-4 text-dark-3 font-medium'>
                            <div className='me-5 flex justify-center items-center'>
                                <MapPinIcon className='h-5 w-5 me-2' />
                                <p>{location}</p>
                            </div>
                            <div className='flex justify-center items-center'>
                                <CurrencyDollarIcon className='h-5 w-5 me-2' />
                                <p>{salary}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='me-6'>
                    <Link to={`/job/${id}`}>
                        <button className="btn px-5 py-2 rounded-md text-white font-semibold">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AppliedJobs;