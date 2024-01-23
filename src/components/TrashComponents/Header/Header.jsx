const Header = ({ children }) => {
    return (
        <>
        <div className="grid grid-cols-2 mx-36 mt-9">
            { children }
        </div>
        </>
    );
};

export default Header;