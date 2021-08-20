import { useState } from "react";

export const useFetching = (callback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetching = async () => {
    try {
      console.log('from useFetcing custom hook try')
      setIsLoading(true);
      await callback();
    }
    catch (e) {
      console.log('error:', e.message)
      setError(e.message);
    }
    finally {
      console.log('from useFetcing custom hook finnaly')
      setIsLoading(false);
    }
  }

  return [fetching, isLoading, error];
};