import { useLoaderData, useParams } from "react-router-dom";

// heroicons
import { 
    MapPinIcon,
    CurrencyDollarIcon,
    CalendarIcon,
    PhoneIcon,
    EnvelopeIcon,
    TagIcon
} from '@heroicons/react/24/outline'
import { useEffect, useState } from "react";

// react toastify
import { toast } from 'react-toastify';
import { appendData, readData, writeData } from "../../utils/database";


const JobDetails = () => {
    const jobs = useLoaderData();
    const { jobId } = useParams();

    const [applied, setApplied] = useState(0)
    const [appliedJobs, setAppliedJobs] = useState(readData('applied_jobs'))

    useEffect(()=>{
        let found = appliedJobs.length > 0 ? appliedJobs.find(id => id == jobId) : 0;
        if (found) setApplied(1);
        else setApplied(0)
    }, [jobId, appliedJobs]);


    const job = jobs.find( jobDetail => jobDetail.id == jobId );
    const {
        id,
        job_title,
        company_name,
        location,
        salary,
        job_description,
        job_responsibility,
        educational_requirements,
        experiences,
        contact_information,
    } = job;


    const applyHandler = (id) => {
        notify();
        appendData("applied_jobs", id);
        setAppliedJobs(readData("applied_jobs"));
    }

    const notify = () => toast.success("Hurray!! You applied this job");

    return (
        <>
            <div className="flex">
                    {/* Job Description */}
                    <div className="text-sm leading-loose me-6">
                        <div className="mt-5">
                            <p className="text-dark-3"><b className="text-black">Job Description:</b> {job_description}</p>
                        </div>
                        <div className="mt-5">
                            <p className="text-dark-3"><b className="text-black">Job Responsibility:</b> {job_responsibility}</p>
                        </div>
                        <div className="mt-5">
                            <h4 className="text-black font-bold mb-2">Educational Requirements:</h4>
                            <p className="text-dark-3">{educational_requirements}</p>
                        </div>
                        <div className="mt-5">
                            <h4 className="text-black font-bold mb-2">Experiences:</h4>
                            <p className="text-dark-3">{experiences}</p>
                        </div>
                    </div>
                    {/* Details */}
                    <div>
                        <div className="relative p-5">
                            <div className="bg-gradient-to-r from-grad-l to-grad-r p-4 rounded-lg opacity-10 absolute top-0 left-0 h-full w-full"></div>
                            {/* Job Details */}
                            <div>
                                <h1 className="font-bold">Job Details</h1>
                                <hr className="w-full my-3 h-[2px] bg-gradient-to-r from-grad-l to-grad-r opacity-45 rounded-full" />
                                <div className="flex items-center text-sm mb-2">
                                    <CurrencyDollarIcon className="w-5 h-5 me-1 text-violet-500"/>
                                    <p className="text-dark-2 font-medium"><b className="text-dark-1">Salary:</b> {salary} (per month)</p>
                                </div>
                                <div className="flex items-center text-sm mb-2">
                                    <CalendarIcon className="w-5 h-5 me-1 text-violet-500"/>
                                    <p className="text-dark-2 font-medium"><b className="text-dark-1">Job Title:</b> {job_title}</p>
                                </div>
                                <div className="flex items-center text-sm mb-2">
                                    <TagIcon className="w-5 h-5 me-1 text-violet-500"/>
                                    <p className="text-dark-2 font-medium"><b className="text-dark-1">Company:</b> {company_name}</p>
                                </div>
                            </div>
                            {/* Contact Details */}
                            <div className="mt-6">
                                <h1 className="font-bold">Contact Details</h1>
                                <hr className="w-full my-3 h-[3px] bg-gradient-to-r from-grad-l to-grad-r opacity-45 rounded-full" />
                                <div className="flex items-center text-sm mb-2">
                                    <PhoneIcon className="w-5 h-5 me-1 text-violet-500"/>
                                    <p className="text-dark-2 font-medium"><b className="text-dark-1">Phone:</b> {contact_information.phone}</p>
                                </div>
                                <div className="flex items-center text-sm mb-2">
                                    <EnvelopeIcon className="w-5 h-5 me-1 text-violet-500"/>
                                    <p className="text-dark-2 font-medium"><b className="text-dark-1">Email:</b> {contact_information.email}</p>
                                </div>
                                <div className="flex items-center text-sm mb-2">
                                    <MapPinIcon className="w-5 h-5 me-1 text-violet-500"/>
                                    <p className="text-dark-2 font-medium"><b className="text-dark-1">Address:</b> {location}</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5">
                            <button className={`${!applied ? 'btn' : 'text-white bg-dark-5 cursor-no-drop'} p-3 font-semibold text-white w-full rounded-md`} disabled={applied} onClick={() => applyHandler(id)}>{!applied ? "Apply Now" : "Applied"}</button>
                        </div>
                    </div>
            </div>
        </>
    );
};

export default JobDetails;