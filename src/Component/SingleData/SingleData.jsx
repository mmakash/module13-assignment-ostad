import React from 'react';
import './SingleData.css';

const SingleData = (props) => {
    const { element } = props;
    return (
        <div className="single-data-container">
            <h1>{element.title}</h1>
            <p>{element.body}</p>
        </div>
    );
};

export default SingleData;