import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';


const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading]= useState(true);
  const [isError, setError]= useState(false);
  const [user, setUser] = useState(null);

  const FetchDataFromUser = async () =>{
    try {
      const response = await fetch(url);
      if (!response.ok) {
        setError(true);
          setIsLoading(false)
          // this if block above just means if there was an error, perhaps in the link, MAKE ERROR TRUE AND STOP LOADING
        return 
      }
      const user = await response.json()
      setUser(user);
    } catch (error) {
      console.log(error);
      setError(true)
    }
    // setIsLoading(false);
  };
  
  
  useEffect(()=>{

    FetchDataFromUser()
  },[]);

  if (isLoading) {
    return <h2>Loading...</h2>
  }
  if (isError) {
    return <h2>There was an error...</h2>
  }
  
  // return <h2>Fetch Data </h2>;

  const {avatar_url, name, company, bio} = user;
  

  return(
    <div>
      <img style={{width: '150px', borderRadius: '50px'}} src={avatar_url} alt={name} />
      <h2>{name}</h2>
      <h4>works at{company}</h4>
      <p>{bio}</p>
    </div>
  );
};
export default MultipleReturnsFetchData;
