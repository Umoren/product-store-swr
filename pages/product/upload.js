import ProductUploadForm from "../../components/ProductUploadForm"
import { mutate } from 'swr';
import axios from "axios";

const upload = () => {
  const onUpload = async (newProduct) => {
    // Optimistically update the local data
    mutate('/products', (products) => {
      if (Array.isArray(products)) {
        return [newProduct, ...products];
      }
      return [newProduct];
    }, false);

    // Make the API call to create the product
    try {
      await axios.post('https://fakestoreapi.com/products', newProduct);

      // Revalidate the data after successful upload
      mutate('/products');
    } catch (error) {
      // Handle any errors
      console.error('Error uploading the product:', error);
    }
  };

  return (
    <div>
      <h1 className='mb-4 text-2xl  p-3 font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-4xl'> Upload Product</h1>
      <ProductUploadForm onUpload={onUpload} />
    </div>
  )
}

export default upload