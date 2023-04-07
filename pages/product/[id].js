import useSWR from "swr";
import Image from "next/image";

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("An error occurred while fetching the data.");
  }
  return response.json();
};

const ProductDetails = ({ id }) => {
  const {
    data: product,
    error,
    isLoading,
  } = useSWR(`https://fakestoreapi.com/products/${id}`, fetcher);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="max-w-2xl mx-auto min-h-screen py-16">
      <h1 className="text-2xl font-semibold mb-4">{product.title}</h1>
      <div className="md:flex space-x-8">
        <div>
          <Image
            src={product.image}
            alt={product.title}
            width={640}
            height={640}
            layout="responsive"
          />
        </div>
        <div>
          <p className="text-gray-100 mb-2">{product.category}</p>
          <p className="text-xl font-bold mb-4">${product.price}</p>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.query;
  return {
    props: {
      id,
    },
  };
}
export default ProductDetails;
