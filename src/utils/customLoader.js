import { readData } from "./database";

// for applied job page
// it loads all jobs data form json file
// and filter out data from jobs data by matching id form localstorage
// finally returns filtered data
async function appliedJobsLoader(){
    let appliedJobsData = readData("applied_jobs");
    let jobsData = await fetch("/jobs.json");
    jobsData = await jobsData.json();
    let appliedJobs = jobsData.filter(job => appliedJobsData.includes(job.id))
    return appliedJobs;
}

export {
    appliedJobsLoader
}