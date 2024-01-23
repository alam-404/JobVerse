
const HomeHeader = () => {
    return (
        <>
            <div className="flex flex-col justify-center text-wrap">
                <div>
                    <h1 className="font-extrabold text-5xl">
                        One Step Closer To Your <span className="gradient-text block">Dream Job</span>
                    </h1>
                    <p className="mt-6 text-dark-3">
                        Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                    </p>
                </div>
                <div className="mt-5">
                    <button className="btn text-white font-semibold rounded-md px-6 py-3">Get Started</button>
                </div>
            </div>
            <div className="w-full h-full">
                <img src="/src/assets/images/user.png" className="" />
            </div>
        </>
    );
};

export default HomeHeader;