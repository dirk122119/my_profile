import React, { useEffect, useState } from "react";
import { Container, Row, Col, List,Card,CardHeader, CardTitle, CardText, CardBody, Button } from 'reactstrap';
import { NavLink, Link } from "react-router-dom";
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

const Projects=(props) => {

    const [error, setError] = useState(null);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('https://wehelpstraoi-app-ox937.ondigitalocean.app/api/projects?sort[0]=id', { headers, method: 'GET' })
          .then(checkStatus)
          .then(parseJSON)
          .then(({ data }) => setProjects(data))
          .catch((error) => setError(error))
      }, [])
    if (error) {
        // Print errors if any
        return <div>An error occured: {error.message}</div>;
      }
      console.log("======================")
      console.log(projects)
      console.log("======================")

      const projectCard=projects.map(({attributes})=>{
        return(
    <Col lg="auto">
        <Card style={{width: '18rem'}}>
            <CardHeader>
                {attributes.name}
            </CardHeader>
            <CardBody>
                <CardText>
                    {attributes.abstract}
                </CardText>
                
            </CardBody>
            
        </Card>
      </Col>)});

return(
    <div>
    {projects.map(({attributes}) => <CollapseCard question={attributes.name} answer={<h1>{attributes.abstract}</h1>} />)}
    </div>
)

}

export default Projects