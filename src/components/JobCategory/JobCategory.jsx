import { useEffect, useState } from "react";
import CategoryCard from "../CategoryCard/CategoryCard";

const JobCategory = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCards(data));
    }, [])

    return (
        <div className="mx-36 mt-20">
            <div className="text-center mb-6">
                <h1 className="mb-3 text-4xl font-bold">Job Category List</h1>
                <p className="text-xs text-dark-3 font-medium">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="flex mx-auto justify-center gap-4 mb-5">
                {
                    cards.map(card => <CategoryCard key={card._id} card={card} />)
                }
            </div>
        </div>
    );
};

export default JobCategory;