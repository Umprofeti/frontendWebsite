import React, { useEffect } from 'react';
import { Header } from '../Components/Header';
import { SizeWindow } from '../Helpers/getSizeWindow';
import {PostStyleMovil} from '../Components/PostStyleMovil';
import { PostStyleDesktop } from '../Components/PostStyleDesktop';
import { Footer } from '../Components/Footer';
import {Helmet} from "react-helmet";
import RVLogo from "../img/RV logo.png";
import { RecomendacionesRV } from '../Components/RecomendacionesRV';
export const MainPage = () => {

  useEffect(() => {
    localStorage.removeItem('id');
  }, [])

  return (
    <div className=''>
      <Helmet>
        <title>Rendez-Vous Magazine</title>
        <meta name="title" content="Rendez-Vous Magazine"/>
        <meta name="description" content="La Revista"/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content={`${process.env.REACT_APP_DOMAIN}`}/>
        <meta property="og:title" content="Rendez-Vous Magazine"/>
        <meta property="og:description" content="La Revista"/>
        <meta property="og:image" itemprop="image" content={RVLogo}/>

        <meta property='twitter:card' content='summary_large_image'/>
        <meta property="twitter:url" content={`${process.env.REACT_APP_DOMAIN}`}/>
        <meta property="twitter:title" content="Rendez-Vous Magazine"/>
        <meta property="twitter:description" content="La Revista"/>
        <meta property="twitter:image"  content={RVLogo}/>

      </Helmet>
      <Header/>
      { SizeWindow() < 1280 ? <PostStyleMovil />
      
      :
        <PostStyleDesktop />
      }
      <RecomendacionesRV/> 
      <Footer/>
    </div >
  );
};
