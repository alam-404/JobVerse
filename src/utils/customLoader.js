import { readData } from "./database";

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