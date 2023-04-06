import Link from 'next/link';
const ProductCard = ({ product }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
            <p className="text-gray-600 mb-2">{product.category}</p>
            <div className="flex justify-between items-center">
                <span className="text-lg font-bold">${product.price}</span>
                <Link
                    href={`/product/${product.id}`}
                    className="text-blue-600 hover:text-blue-800"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
