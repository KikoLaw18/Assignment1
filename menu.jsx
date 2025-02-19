import React from 'react';
import pizza from './img/pizza.jpeg';
import risotto from './img/risotto.jpeg';
import lasagna from './img/lasagna.jpeg';
import bread from './img/bread.jpeg';
import menuDesc from './description';
import LikeButton from './favorited';

const imageMap = {
    "Neapolitan Pizza": pizza,
    "Seafood Risotto": risotto,
    "Lasagna": lasagna,
    "Bruschetta": bread
};

function Menu() {
    const items = menuDesc();

    return (
        <div className="flex justify-center">
            <div className="md:grid md:grid-cols-2 md:gap-5 lg:grid lg:grid-cols-2 lg:gap-x-20">
                {items.map((item) => (
                    <div key={item.id} className="text-black max-w-120 max-h-150 flex flex-col items-center p-4">
                        <img className="w-full h-80 mb-5 object-cover" src={imageMap[item.title]} alt={item.title} />
                        <h2 className="text-xl font-bold text-center mb-4">{item.title}</h2>
                        <p className="text-center mb-4">{item.description}</p>
                        <p className="text-center mb-4">${item.price}</p>
                        <div className="flex justify-center items-center">
                            <LikeButton></LikeButton>
                        </div>
                    </div>
                ))};
            </div>
        </div>
    );
}
export default Menu;