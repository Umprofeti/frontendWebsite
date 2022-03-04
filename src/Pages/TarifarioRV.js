import React, {useState} from 'react'
import '../index.css';
import 'animate.css';
import { Footer } from '../Components/Footer';
import { Header } from '../Components/Header';
import { Helmet } from 'react-helmet';
import RVLogo from "../img/RV logo.png";
import {ReactComponent as Tarifario} from '../svg/TARIFARIO-2022-COMPLETO.svg';
import  Beneficio1 from '../svg/pag completa taf1.svg';
import  Beneficio2 from '../svg/pag completa taf2.svg';
import  Beneficio3 from '../svg/pag completa taf3.svg';
export const TarifarioRV = () => {

  const [beneficio1, setBeneficio1] = useState(false)
  const [beneficio2, setBeneficio2] = useState(false)
  const [beneficio3, setBeneficio3] = useState (false);
  const BeneficiosCerrar = (e)=> {
    e.preventDefault();
    setBeneficio1(false);
  }

  const BeneficiosCerrar2 = (e) => {
    e.preventDefault();
    setBeneficio2(false);
  }

  const BeneficiosCerrar3 = (e) => {
    e.preventDefault();
    setBeneficio3(false);
  }

  const beneficiosTarifario = () => {

    const boton1 =  document.querySelector('#boton');
    const boton2 =  document.querySelector('#boton2');
    const boton3 =  document.querySelector('#boton3');

    boton1.addEventListener('click', ()=>{
      setBeneficio1(true);
    });

    boton2.addEventListener('click', ()=>{
      setBeneficio2(true)
    });

    boton3.addEventListener('click', ()=>{
      setBeneficio3(true)
    });
  } 

  return (
    <>
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
        {beneficio1
          ?
            <div className='fixed z-40 bg-zinc-700/50 w-[100vw] h-[100vh] xl:h-[100vh] flex items-center'>
              <div  className='z-50 animate__fadeInTopLeft animate__animated w-[100%] h-[100%] flex mx-auto items-center xl:w-[52vw] xl:h-[100vw] md:w-[80vw] lg:w-[59vw]'>
                <img src={Beneficio1} alt='Beneficio-1' onClick={(e)=> {BeneficiosCerrar(e)}} />
              </div>
            </div>
          : null}
        {beneficio2? <div className='fixed z-40 bg-zinc-700/50 w-[100vw] h-[100vh] flex items-center'>
                <div  className='z-50 animate__fadeInTopLeft animate__animated xl:w-[52vw] w-[100%] h-[100vw] flex mx-auto items-center md:w-[80vw] lg:w-[59vw]'>
                  <img src={Beneficio2} alt='Beneficio-2' onClick={(e)=> {BeneficiosCerrar2(e)}} />
                </div>
              </div>
          :null }
        {beneficio3? 
          <div className='fixed z-40 bg-zinc-700/50 w-[100vw] h-[100vh] flex items-center'>
            <div  className='z-50 animate__fadeInTopLeft animate__animated xl:w-[45vw] w-[100%] h-[100vw] flex mx-auto items-center md:w-[60vw] lg:w-[50vw]'>
              <img src={Beneficio3} alt='Beneficio-3' onClick={(e)=> BeneficiosCerrar3(e)}/>
            </div>
          </div>
        :null}
        <Header/>
        <div onLoad={beneficiosTarifario} className="mt-6">
          <Tarifario/>
        </div>
        <Footer/>
    </>
  )
}
