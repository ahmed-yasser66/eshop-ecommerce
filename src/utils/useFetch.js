import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url, method) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetching() {
      try {
        setIsLoading(true);
        setError("");
        const resp = await axios({ url, method });
        setData(resp.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetching();
  }, [url]);
  return { data, isLoading, error };
};
export default useFetch;
