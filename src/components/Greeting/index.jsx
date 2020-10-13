import React from 'react';
import { Jumbotron} from 'react-bootstrap';
import './index.css';

const Greeting = ({name}) => {
  if (name.length > 0) {
    return (
      
      <Jumbotron>

        <h1>Hai,{name} Have a great day </h1>
      </Jumbotron>
      
    );
  } else {
    return (
      
        <Jumbotron>
          <h1>Hai,  Have a great day</h1>
        </Jumbotron>
      
    );
  }
};

export default Greeting;