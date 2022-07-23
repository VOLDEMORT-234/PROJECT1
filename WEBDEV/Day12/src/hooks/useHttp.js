import { useState, useCallback } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  //   const [tasks, setTasks] = useState([]);

  const Sendrequest = useCallback(async (requestConfig, getData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        requestConfig.url,
        {
          method: requestConfig.method ? requestConfig.method : "GET",
          header: requestConfig.header ? requestConfig.header : {},
          body: JSON.stringify(requestConfig.body)
            ? JSON.stringify(requestConfig.body)
            : null,
        }
        // "https://deepesh-agrawal-default-rtdb.firebaseio.com/task.json"
      );

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      //   getData(data);
      //   const loadedTasks = [];

      getData(data);

      //   for (const taskKey in data) {
      //     loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      //   }

      //   setTasks(loadedTasks);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading: isLoading,
    error: error,
    Sendrequest: Sendrequest,
  };
};

export default useHttp;
