import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center p-5">
            <div>
                <h1 className="text-3xl font-bold text-dark-1"><Link to='/'>JobVerse</Link></h1>
            </div>
            <div className="me-4 text-xs font-medium">
                <Link className="me-4 text-dark-3 hover:text-dark-4" to="/statistics">Statistics</Link>
                <Link className="me-4 text-dark-3 hover:text-dark-4" to="/applied">Applied Jobs</Link>
                <Link className="me-4 text-dark-3 hover:text-dark-4" to="/blog">Blog</Link>
            </div>
            <div>
                <button className="rounded-md px-3 py-2 bg-gradient-to-r from-grad-l to-grad-r text-white hover:bg-gradient-to-l font-semibold text-xl">Start Applying</button>
            </div>
        </div>
    );
};

export default Navbar;