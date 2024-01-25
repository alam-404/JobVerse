// This is a mess... I messed up with design... will figure out maybe some other day.



const CategoryCard = (props) => {
    const card = props.card;

    return (
        <div className="relative w-[260px] h-[243px] rounded-xl overflow-hidden">
            <div>
                <div className="bg-gradient-to-r from-grad-l to-grad-r w-full opacity-10 h-full -z-10 top-0 left-0 absolute"></div>
                <div className="relative">
                    <div className="relative">
                        <div className="relative">
                            <div className="bg-gradient-to-r from-grad-l to-grad-r w-[70px] h-[70px] opacity-15 -z-10 top-0 left-0 translate-x-1/2 translate-y-1/2 absolute rounded-lg"></div>
                        </div>
                        <div className="absolute top-0 left-0 translate-x-1/2 translate-y-1/2 h-[70px] w-[70px] p-2">
                            <img src={card.categoryLogo} className="w-full h-full" />
                        </div>
                    </div>
                    <div className="absolute top-[125px] left-4">
                        <p className="text-lg font-semibold text-dark-2">{card.categoryName}</p>
                        <p className="text-dark-4">{card.jobsAvailable} Jobs Available</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;