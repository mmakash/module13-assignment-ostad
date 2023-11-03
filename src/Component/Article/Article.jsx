import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Article.css';
const Article = () => {
    let [data, setData] = useState([]);
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => response.json())
        .then((json) => setData(json));
    }, []);
    return (
      <div className="article-container">
        <h1>Data Fetch using useEffect</h1>
        <h2>{data.title}</h2>
        <p>{data.body}</p>
      </div>
    );
};

export default Article;