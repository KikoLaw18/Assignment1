import pizza from './img/pizza.jpeg';
import risotto from './img/risotto.jpeg';
import lasagna from './img/lasagna.jpeg';
import bread from './img/bread.jpeg';
const menuDesc = () => {

    return [
        {
            "id": 1,
            "image": pizza,
            "title": "Neapolitan Pizza",
            "description": "A basic dough, raw tomatoes, fresh mozzarella cheese, fresh basil, and olive oil",
            "price": "21.99"
        },
        {
            "id": 2,
            "image": risotto,
            "title": "Seafood Risotto",
            "description": "Rice, seafood, onions or shallots, white wine, stock, and vegetables",
            "price": "28.99"
        },
        {
            "id": 3,
            "image": lasagna,
            "title": "Lasagna",
            "description": "A layer of fresh pasta alternating with a meat sauce, béchamel and grated cheese",
            "price": "24.95"
        },
        {
            "id": 4,
            "image": bread,
            "title": "Bruschetta",
            "description": "Toasted bread coated in Olive Oil and often topped with tomatoes",
            "price": "15.95"
        }
    ]
}

export default menuDesc;