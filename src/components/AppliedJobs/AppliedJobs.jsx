
const AppliedJobs = (props) => {
    const {
        id,
        job_title
    } = props.job;

    return (
        <div>
            <h1>{job_title}</h1>
        </div>
    );
};

export default AppliedJobs;