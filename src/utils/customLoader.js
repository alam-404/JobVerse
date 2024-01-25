import { readData, writeData } from "./database";

// for applied job page
// it loads all jobs data form json file
// and filter out data from jobs data by matching id form localstorage
// finally returns filtered data
async function appliedJobsLoader(){
    let appliedJobsData = readData("applied_jobs");
    // if there is no applied_jobs data in database
    // then set the data with default value
    if (!appliedJobsData){
        writeData("applied_jobs", []);
        appliedJobsData = [];
    }
    let jobsData = await fetch("/jobs.json");
    jobsData = await jobsData.json();
    return jobsData.filter(job => appliedJobsData.includes(job.id))
}

export {
    appliedJobsLoader
}