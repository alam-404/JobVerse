// import heroicon
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

import { Link } from 'react-router-dom';

const FeatureCard = (props) => {
    const job = props.job;
    const {
        id,
        company_logo,
        job_title,
        company_name,
        remote_or_onsite,
        fulltime_parttime,
        location,
        salary
    } = job;

    return (
        <>
            <div className="border rounded-md p-7 hover:border-grad-l transition-colors ease-in-out duration-1000">
                <div>
                    <img src={company_logo} className="w-20" />
                </div>
                <div className="mt-4">
                    <h3 className="text-xl font-semibold text-dark-1">{job_title}</h3>
                    <h5 className="text-sm text-dark-3 font-semibold">{company_name}</h5>
                </div>
                <div className="flex mt-4 items-center text-xs font-semibold">
                    <div className="me-2 px-3 py-2 gradient-text border-2 rounded-lg border-grad-l">
                        <p>{remote_or_onsite}</p>
                    </div>
                    <div className="px-3 py-2 gradient-text border-2 rounded-lg border-grad-l">
                        <p>{fulltime_parttime}</p>
                    </div>
                </div>
                <div className='flex items-center mt-4 text-dark-3 font-medium'>
                    <div className='me-5 flex justify-center items-center'>
                        <MapPinIcon className='h-5 w-5 me-2' />
                        <p>{location}</p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <CurrencyDollarIcon className='h-5 w-5 me-2' />
                        <p>{salary}</p>
                    </div>
                </div>
                {/* View Details Button */}
                <div className="mt-4">
                    <Link to={`/job/${id}`}>
                        <button className="btn px-5 py-2 rounded-md text-white font-semibold">View Details</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default FeatureCard;