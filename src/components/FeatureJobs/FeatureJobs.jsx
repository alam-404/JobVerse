import { useEffect, useState } from "react";
import FeatureCard from "../FeatureCard/FeatureCard";
import { randFeatureJobs } from "../../utils/randomRange";

const FeatureJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [featureJobsArr, setFeatureJobsArr] = useState([]);

    useEffect(() => {
        fetch("jobs.json")
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    useEffect(() => {
        setFeatureJobsArr(randFeatureJobs(jobs))
    }, [jobs])

    // Show all jobs
    const seeAllJobs = () => {
        setFeatureJobsArr(jobs)
    }
    // reset
    const showDefault = () => {
        setFeatureJobsArr(randFeatureJobs(jobs))
    }

    return (
        <div className="mx-36 mt-20">
            <div className="text-center mb-4">
                <h1 className="mb-3 text-4xl font-bold">Featured Jobs</h1>
                <p className="text-xs text-dark-3 font-medium">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            {/* Random Feature Cards */}
            <div className="grid grid-cols-2 gap-4 mt-6">
                {
                    (typeof featureJobsArr[0] != "undefined" ? featureJobsArr : jobs.slice(0, 4)).map(job => <FeatureCard key={job.id} job={job} />)
                }
            </div>
            {/* See all button */}
            <div className="my-5 text-center" id="feature-jobs">
                {
                    featureJobsArr.length != jobs.length ?
                        <button className="btn px-5 py-3 rounded-md text-white font-semibold" onClick={seeAllJobs}>
                            See All Jobs
                        </button>
                        :
                        // optional
                        <button className="btn px-5 py-3 rounded-md text-white font-semibold" onClick={showDefault}>
                            Show less
                        </button>
                }
            </div>
        </div>
    );
};

export default FeatureJobs;