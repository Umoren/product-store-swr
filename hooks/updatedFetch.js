import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetcher = async (url) => {
        try {
            const response = await axios.get(url);
            return {
                data: response.data,
                status: response.status,
                headers: response.headers,
                // Add any other information you'd like to include
            };
        } catch (error) {
            throw error;
        }
    };

    useEffect(() => {
        let isMounted = true;

        fetcher(url)
            .then((response) => {
                if (isMounted) {
                    setData(response);
                    setIsLoading(false);
                }
            })
            .catch((error) => {
                if (isMounted) {
                    setError(error);
                    setIsLoading(false);
                }
            });

        return () => {
            isMounted = false;
        };
    }, [url]);

    return { data, error, isLoading };
};

export default useFetch;
