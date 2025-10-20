import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Footer></Footer>
        </div>
    );
};

export default Root;