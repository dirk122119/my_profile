import React, { useEffect, useState } from "react";
import CollapseCard from "./CollapseCard";

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



function Ghpage(props){
    const [error, setError] = useState(null);
    const [article, setArticle] = useState([]);

    useEffect(() => {
        fetch('https://wehelpstraoi-app-ox937.ondigitalocean.app/api/gh-pages?sort[0]=id', { headers, method: 'GET' })
          .then(checkStatus)
          .then(parseJSON)
          .then(({ data }) => setArticle(data))
          .catch((error) => setError(error))
      }, [])
    if (error) {
        // Print errors if any
        return <div>An error occured: {error.message}</div>;
      }
      console.log("======================")
      console.log(article)
      console.log("======================")

    return(
        <div>
        {article.map(({attributes}) => <CollapseCard question={attributes.title} answer={<h1>{attributes.answer}</h1>} />)}
        </div>
    )
}

export default Ghpage;