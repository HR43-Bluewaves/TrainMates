import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

const Landing = (props) => {
  return (
    <div className = 'login'>
      <Button variant="info" type="submit" onClick={()=>alert('Clicked')}>
        Login to mates
      </Button>
    </div>
  );
};

export default Landing;