import Navbar from "../Navbar/Navbar";

const HomeHeader = () => {
    return (
        <>
            <div className="bg-gradient-to-r from-grad-l to-grad-r w-full opacity-5 h- -z-10 top-0 left-0 absolute h-full overflow-hidden"></div>
            <nav>
                <Navbar />
            </nav>
            <div className="grid grid-cols-2 mt-[3.7rem] overflow-hidden">
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
                <div className="w-full h-full -z-20">
                    <img src="/assets/images/user.png" className="w-full h-full" />
                </div>
            </div>
        </>
    );
};

export default HomeHeader;