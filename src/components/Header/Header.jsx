const Header = ({ children }) => {
    return (
        <>
            <div>
                <div className="bg-gradient-to-r from-grad-l to-grad-r w-full opacity-50 h- -z-10 top-0 left-0 static h-64 overflow-hidden"></div>
                <div className="">
                    <img src='/src/assets/images/bg1.png' />
                </div>
            </div>
            <div className="flex flex-col justify-center items-center text-2xl font-bold">
                {children}
            </div>
        </>
    );
};

export default Header;