function randFeatureJobs(jobs) {
    let indexArr = [];
    let jobsArr = [];
    // console.log(jobs)
    while (true){
        if (indexArr.length >= 4) break;

        let randIndex = randNum(0, 9);
        if (!indexArr.includes(randIndex)){
            indexArr.push(randIndex);
            jobsArr.push(jobs[randIndex])
        }
    }
    // console.log(jobsArr)
    return jobsArr;
}

function randNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

export {
    randFeatureJobs
}