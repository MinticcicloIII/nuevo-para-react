import Footer from 'components/Footer';
import Header from 'components/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return(
        <div className="mainContainer">
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
  )
};

/* <>remplazan al div, es una buena practica */
export default Layout;
