import useSWR from 'swr'
import Image from 'next/image';
const ProductDetails = ({ id }) => {
    const { data: product, error, isLoading } = useSWR(`https://fakestoreapi.com/products/${id}`);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-2xl font-semibold mb-4">{product.title}</h1>
            <Image
                src={product.image}
                alt={product.title}
                width={640}
                height={640}
                layout="responsive"
            />
            <p className="text-gray-600 mb-2">{product.category}</p>
            <p className="text-xl font-bold mb-4">${product.price}</p>
            <p>{product.description}</p>
        </div>
    );
};

export async function getServerSideProps(context) {
    const { id } = context.query;
    return {
        props: {
            id
        }
    }
}
export default ProductDetails;
