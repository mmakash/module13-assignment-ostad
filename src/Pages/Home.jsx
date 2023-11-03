import React from 'react';
import NavBar from './../Component/NavBar/NavBar';
import Todo from '../Component/Todo/Todo';
import Form from '../Component/Form/Form';


const Home = () => {
    return (
        <div>
         <NavBar />
         <Todo />
         <Form />
        </div>
    );
};

export default Home;