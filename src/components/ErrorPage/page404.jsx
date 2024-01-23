import { Link } from "react-router-dom";

const Page404 = () => {
    return (
        <>
            <div className="flex flex-col justify-center gap-10 items-center h-screen">
                <div className="flex justify-center items-center gap-7">
                    <div>
                        <img src="https://em-content.zobj.net/source/skype/289/ghost_1f47b.png" />
                    </div>
                    <div>
                        <h1 className="text-6xl font-bold">Boooooooo!!!</h1>
                        <h2 className="text-lg mt-5 text-dark-4 font-medium">404 | Not Found</h2>
                    </div>
                </div>
                <div className="text-dark-2 font-medium ">
                    <p>AYY! You are in a wrong path.</p>
                    <p>Hurry back to <Link to='/' className="gradient-text font-bold">HomePage</Link></p>
                </div>
            </div>

        </>
    );
};

export default Page404;