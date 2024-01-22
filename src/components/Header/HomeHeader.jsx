import Navbar from "../Navbar/Navbar";

const HomeHeader = () => {
    return (
        <div className="relative">
            <div className="mx-36">
                <Navbar />
            </div>
            <div>
                <div className="bg-gradient-to-r from-grad-l to-grad-r w-full opacity-5 h-full -z-10 top-0 left-0 absolute">
                </div>
                <div className="relative grid grid-cols-2 mx-36 mt-9">
                    <div className="flex flex-col justify-center text-wrap">
                        <div>
                            <h1 className="font-extrabold text-5xl">
                                One Step Closer To Your <span className="dream-text block">Dream Job</span>
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
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;