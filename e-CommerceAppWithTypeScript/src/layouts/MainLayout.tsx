import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = (props:any) => {
  return (
    <div>
      <Header{...props}/>
      <div className="main">
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
