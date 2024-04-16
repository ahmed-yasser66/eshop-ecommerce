import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url, method) => {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetching() {
      try {
        const resp = await axios({
          url,
          method,
        });
        setData(resp.data);
      } catch (error) {
        setIsError(true);
        throw new Error("an error occured: " + error);
      }
      setIsLoading(false);
    }
    fetching();
  }, []);
  return { data, isLoading, isError };
};
export default useFetch;
