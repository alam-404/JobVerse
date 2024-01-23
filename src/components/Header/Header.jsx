import Navbar from "../Navbar/Navbar";

const Header = ({ children }) => {
    return (
        <>
            <div className="relative">
                <div className="bg-gradient-to-r from-grad-l to-grad-r w-full opacity-10 h- -z-10 top-0 left-0 absolute h-52 overflow-hidden"></div>
                <div className="absolute translate-y-[7rem]">
                    <img src='/assets/images/bg1.png' className="w-[170px]" />
                </div>
                <div className="absolute rotate-180 right-0 -z-20">
                    <img src='/assets/images/bg1.png' className="w-[170px]" />
                </div>
                <nav className="mx-36">
                    <Navbar />
                </nav>
            </div>
            <div className="flex flex-col justify-center items-center text-2xl font-bold">
                {children}
            </div>
        </>
    );
};

export default Header;