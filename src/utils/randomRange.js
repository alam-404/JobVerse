// for feature page
// it gives 4 items randomly from jobs object

function randFeatureJobs(jobs) {
    let indexArr = [];
    let jobsArr = [];
    while (true){
        if (indexArr.length >= 4) break;

        let randIndex = randNum(0, 9);
        if (!indexArr.includes(randIndex)){
            indexArr.push(randIndex);
            jobsArr.push(jobs[randIndex])
        }
    }
    return jobsArr;
}

// generate random number
function randNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

export {
    randFeatureJobs
}