import React from 'react';
import Proptypes from 'prop-types';

function Greeting(props){
    return <h2>{props.greeting} {props.name}</h2>
}

Greeting.propTypes = {
    name: Proptypes.string.isRequired,
    greeting: Proptypes.string.isRequired

}

export default Greeting;