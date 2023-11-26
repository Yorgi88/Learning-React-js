import { useEffect, useState } from 'react';
// lets make it more generic by adding much more than user
// const { avatar_url, name, company, bio } = user; 
// I THINK THEY MEANT THIS CODE


const useFetch =(url)=>{
    // recall from the 02-fetch-data.jsx file, we have three state values
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState(null);



    useEffect(() => {
        const fetchData = async () => {
          try {
            const resp = await fetch(url);
            // console.log(resp);
            if (!resp.ok) {
              setIsError(true);
              setIsLoading(false);
              return;
            }
    
            const response = await resp.json();
            setData(response);
          } catch (error) {
            setIsError(true);
            // console.log(error);
          }
          // hide loading
          setIsLoading(false);
        };
        fetchData();
      }, []);

      return {isLoading, isError, data}

    }
    
    export default useFetch;
