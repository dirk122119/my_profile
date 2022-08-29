import { useEffect, useState } from 'react';

// Parses the JSON returned by a network request
const parseJSON = (resp) => (resp.json ? resp.json() : resp);

// Checks if a network request came back fine, and throws an error if not
const checkStatus = (resp) => {
  if (resp.status >= 200 && resp.status < 300) {
    return resp;
  }

  return parseJSON(resp).then(resp => {
    throw resp;
  });
};

const headers = { 'Content-Type': 'application/json' };

const Getapi = () => {
  const [error, setError] = useState(null);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch('https://wehelpstraoi-app-ox937.ondigitalocean.app/api/gh-pages', { headers, method: 'GET' })
      .then(checkStatus)
      .then(parseJSON)
      .then(({ data }) => setRestaurants(data))
      .catch((error) => setError(error))
  }, [])

  if (error) {
    // Print errors if any
    return <div>An error occured: {error.message}</div>;
  }
  console.log(restaurants)
  return (
    <div className="App">
      <h1>getdata</h1>
    </div>
  );
};

export default Getapi;