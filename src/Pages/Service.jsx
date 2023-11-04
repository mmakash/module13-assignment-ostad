import React from 'react';
import NavBar from '../Component/NavBar/NavBar';
import Footer from '../Component/Footer/Footer';
import TextChange from '../Component/TextChange/TextChange';

const Service = () => {
    return (
        <div>
            <NavBar />
            <h1>DOM Manipulation Using UseRef</h1>
            <TextChange />
            <Footer />
        </div>
    );
};

export default Service;