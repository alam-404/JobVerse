
const Footer = () => {
    return (
        <>
            <div className="relative h-64 bg-dark-1 flex justify-center items-center">
                <div className="absolute bottom-0">
                </div>
                <div className="flex justify-around items-center text-white">
                    <div className="w-1/3">
                        <div>
                            <h1 className="text-white text-2xl font-semibold">JobVerse</h1>
                            <p className="text-dark-4 text-wrap text-xs mt-5">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className="flex flex-col">
                        {/* Company */}
                        <h1 className="font-medium me-6">Company</h1>
                        <div className="text-dark-5 mt-4 font-medium text-xs">
                            <a className="block cursor-pointer">About Us</a>
                            <a  className="block cursor-pointer mt-3">Work</a>
                            <a  className="block cursor-pointer mt-3">Latest News</a>
                            <a  className="block cursor-pointer mt-3">Careers</a>
                        </div>
                    </div>
                    <div>
                        {/* Product */}
                        <h1 className="font-medium me-6">Product</h1>
                        <div className="text-dark-5 mt-4 font-medium text-xs">
                            <a className="block cursor-pointer">Prototype</a>
                            <a  className="block cursor-pointer mt-3">Plans & Pricing</a>
                            <a  className="block cursor-pointer mt-3">Customers</a>
                            <a  className="block cursor-pointer mt-3">Integrations</a>
                        </div>
                    </div>
                    <div>
                        {/* Support */}
                        <h1 className="font-medium me-6">Support</h1>
                        <div className="text-dark-5 mt-4 font-medium text-xs">
                            <a className="block cursor-pointer">Help Desk</a>
                            <a  className="block cursor-pointer mt-3">Sales</a>
                            <a  className="block cursor-pointer mt-3">Become a Partner</a>
                            <a  className="block cursor-pointer mt-3">Developers</a>
                        </div>
                    </div>
                    <div className="ms-6">
                        {/* Contact */}
                        <h1 className="font-medium me-6">Contact</h1>
                        <div className="text-sm mt-5 text-dark-5">
                            <p>Dhaka, Bangladesh</p>
                            <p className="mt-2">+8801788776621</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <hr className="bg-white border-white w-28" />
            </div>
        </>
    );
};

export default Footer