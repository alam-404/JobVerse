// This is a mess... I messed up with design... will figure out maybe some other day.



const CategoryCard = (props) => {
    const card = props.card;

    return (
        <div className="relative me-5 w-[311px] h-[243px] rounded-md">
            <div>
                <div className="bg-gradient-to-r from-grad-l to-grad-r w-full opacity-5 h-full -z-10 top-0 left-0 absolute"></div>
                <div className="px-4 py-4">
                    <div className="relative">
                        <div className="">
                            <div className="bg-gradient-to-r from-grad-l to-grad-r w-[70px] h-[70px] opacity-10 -z-10 top-0 left-0 absolute rounded-lg"></div>
                        </div>
                        <div className="">
                            <img src={card.categoryLogo} className="h-[40px] w-[40px]" />
                        </div>
                    </div>
                    <div>
                        <p className="text-lg font-semibold text-dark-2">{card.categoryName}</p>
                        <p className="text-dark-4">{card.jobsAvailable} Jobs Available</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;