import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING +1)) + MIN_RATING
    );

    const [hasPrime] = useState(Math.random() < 0.5)
    
    return (
        <div className="flex flex-col m-5 bg-white p-5" id="{category}">
            <p className="top-2 right-2 text-xs italic text-gray-800">{category}</p>

            <Image src={image} height={200} width={200} objectFit="contain" />
            
            <h4 className="my-3 font-semibold">{title}</h4>

            <div className="flex">
                {Array(rating).fill().map((_, i) => (
                    <StarIcon className="h-5 text-yellow-500" />
                ))}
            </div>
            
            <p className="text-xs my-2 line-clamp-2">{description}</p>

            <div className="mb-5">
                <Currency quantity={price} currency="USD" />
            </div>

            {hasPrime && (
                <div className="flex items-center space-x-2 -mt-5">
                    <img className="w-12" src="https://links.papareact.com/fdw" alt="has prime membership"/>
                    <p className="text-xs text-gray-500">FREE Next day Delivery</p>
                </div>
            )}
        
            <button className="mt-auto button bg-yellow-400 hover:bg-yellow-500 h-12">Add To Cart</button>
        </div>
    );
}

export default Product;