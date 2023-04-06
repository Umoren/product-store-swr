import ProductCard from "./ProductCard";
import useFetch from '../hooks/useFetch';
import LoadingIndicator from './LoadingIndicator';
import ErrorMessage from './ErrorMessage';
import { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const ProductList = () => {
    const { data: products, error, isLoading, loadMore, hasNextPage } = useFetch('products', 20);
    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        loadMore();
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);


    if (isLoading) {
        return <LoadingIndicator />;
    }

    if (error) {
        return <ErrorMessage message={error.message} />;
    }

    return (
        <div>
            <h1 className='mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl'> Product Store</h1>
            {error && <div> <ErrorMessage /></div>}
            <div className="mt-8 ">
                <InfiniteScroll
                    dataLength={products.length}
                    next={loadMore}
                    hasMore={hasNextPage}
                    loader={<LoadingIndicator />}
                    endMessage={<p>All products loaded</p>}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {products && products.map((product, index) => (
                            <ProductCard key={index} product={product} />
                        ))}
                    </div>
                </InfiniteScroll>
            </div>
        </div>
    );
};

export default ProductList;
