import React, { useState } from 'react';

const ProductUploadForm = ({ onUpload }) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newProduct = {
            title,
            price,
            description,
            category,
            image,
        };

        onUpload(newProduct);

        // Clear form fields
        setTitle('');
        setPrice('');
        setDescription('');
        setCategory('');
        setImage('');
    };

    return (
        <form onSubmit={handleSubmit} className="min-h-screen">
            <div className='mx-auto space-y-6 w-1/2 py-16'>
                <div>
                    <label htmlFor="title" className="block text-sm font-medium ">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring text-black p-3 focus:ring-blue-200 focus:ring-opacity-50"
                    />
                </div>
                <div>
                    <label htmlFor="price" className="block text-sm font-medium text-white">
                        Price
                    </label>
                    <input
                        type="number"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="mt-1 block w-full rounded-md text-black p-3 border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                </div>
                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-white">
                        Description
                    </label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="mt-1 block w-full rounded-md text-black p-3 border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    ></textarea>
                </div>
                <div>
                    <label htmlFor="category" className="block text-sm font-medium text-white">
                        Category
                    </label>
                    <input
                        type="text"
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="mt-1 block w-full rounded-md text-black p-3 border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                </div>
                <div>
                    <label htmlFor="image" className="block text-sm font-medium text-white">
                        Image URL
                    </label>
                    <input
                        type="text"
                        id="image"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        className="mt-1 block w-full rounded-md text-black p-3 border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                </div>
                <div className='flex justify-center'>
                    <button
                        type="submit"
                        className=" bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                    >
                        Upload Product
                    </button>
                </div>
            </div>
        </form>
    );
};

export default ProductUploadForm;
