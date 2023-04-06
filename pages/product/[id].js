import useFetch from "../../hooks/useFetch";
const ProductDetails = ({ id }) => {
    const { data: product, error, isLoading } = useFetch(`products/${id}`);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="max-w-2xl mx-auto my-16 ">
            <h1 className="text-2xl font-semibold mb-4">{product.title}</h1>
            <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-cover mb-4 rounded"
            />
            <p className="text-gray-600 mb-2">{product.category}</p>
            <p className="text-xl font-bold mb-4">${product.price}</p>
            <p>{product.description}</p>
        </div>
    );
};

export async function getServerSideProps(context) {
    const { id } = context.query;
    return { props: { id } };
}

export default ProductDetails;
