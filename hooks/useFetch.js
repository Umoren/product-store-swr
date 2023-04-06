import useSWRInfinite from "swr/infinite";

const fetcher = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('An error occurred while fetching the data.');
    }
    return await response.json();
};

const useFetch = (path, limit) => {
    const getKey = (pageIndex, previousPageData) => {
        if (previousPageData && !previousPageData.length) return null;
        const pageNumber = pageIndex + 1;
        return `https://fakestoreapi.com/${path}?_page=${pageNumber}&_limit=${limit}`;
    };


    const { data, error, size, setSize } = useSWRInfinite(getKey, fetcher);

    const loadMore = () => setSize(size + 1);

    return {
        data: data ? data.flat() : [],
        isLoading: !error && !data,
        isError: error,
        loadMore,
        hasNextPage: data && data[data.length - 1]?.length === limit,
    };
};

export default useFetch;
