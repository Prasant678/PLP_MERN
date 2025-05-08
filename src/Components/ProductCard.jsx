import React from 'react';
import { FiStar } from 'react-icons/fi';
import { IoIosHeartEmpty } from 'react-icons/io';

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-4">
                <div className="h-48 flex items-center justify-center mb-4">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="max-h-full max-w-full object-contain"
                    />
                </div>
                <h3 className="font-semibold text-lg mb-1 line-clamp-2 h-25">{product.title}</h3>
                <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                            <FiStar
                                key={i}
                                fill={i < Math.floor(product.rating.rate) ? 'currentColor' : 'none'}
                                className="w-4 h-4"
                            />
                        ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-1">
                        ({product.rating.count})
                    </span>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-gray-800 font-bold text-lg mb-4">${product.price}</p>
                    <IoIosHeartEmpty size={20}/>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;