import React, {useState} from 'react';
import '../index.css';
import RVLOGO from '../img/RV logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { SizeWindow } from '../Helpers/getSizeWindow';
import 'animate.css';
import {Link} from 'react-router-dom';
import { Slider } from './Slider';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

const GENERAL_SETTINGS = gql`query GENERAL_SETTINGS {
  generalSettings {
    description
    title
  }
} `;

const HeaderContentFetch = (props)=> {

  const {description, title} = props.props;

  return(
    <>
          <div>
            <div className='hidden xl:flex xl:fixed left-[-14.9%] 2xl:left-[-12vw] h-[5vh] pl-[9rem] pr-[9rem] mt-[9rem] rotate-90 items-center justify-center z-30 border-b-[30px] border-b-[#ad8d32] border-r-[30px] border-r-transparent 3xl:left-[-9.5%] laptopL:left-[-13vw]'>
              <p className='font-Volkhov text-white rotate-180 relative top-[11px] text-[0.9rem] 2xl:top-[18px]'>{description}</p>
            </div>
          </div>
          
        <div className=' hidden xl:block'>
            <div className='flex flex-col px-[21rem]'>
              <h1 className='font-Metropolis text-[5rem] text-center pt-6'>{title}</h1>
              <h2 className='font-Metropolis text-[2rem] text-center font-light relative left-[7rem] bottom-[2rem] '>magazine</h2>
            </div>
        </div>
    </>
  );
}

const HeaderDefault = ()=> {
  return(
    <>
          <div>
            <div className='hidden xl:flex xl:fixed left-[-14.9%] 2xl:left-[-12vw] h-[5vh] pl-[9rem] pr-[9rem] mt-[9rem] rotate-90 items-center justify-center z-30 border-b-[30px] border-b-[#ad8d32] border-r-[30px] border-r-transparent 3xl:left-[-10%] laptopL:left-[-14vw]'>
              <p className='font-Volkhov text-white rotate-180 relative top-[10px] text-[0.9rem] 2xl:top-[18px]'>LA REVISTA</p>
            </div>
          </div>
          
        <div className=' hidden xl:block'>
            <div className='flex flex-col px-[21rem]'>
              <h1 className='font-Metropolis text-[5rem] text-center pt-6'>RENDEZ-VOUS</h1>
              <h2 className='font-Metropolis text-[2rem] text-center font-light relative left-[7rem] bottom-[2rem]'>magazine</h2>
            </div>
        </div>
    </>

  );
}

export const Header = () => {
  
  const{loading, error, data} = useQuery(GENERAL_SETTINGS);

  const [hideMenu, setHideMenu] = useState(true);
  
  if(error) window.location.reload();

  let TamañoMin = 50;

  if(SizeWindow() >= 1280){
    TamañoMin = 200;
  }

  const ShowMenuMovil = () => {
    const HideMenu = document.getElementById('HideMenu');
    setHideMenu(false);
    HideMenu.classList.toggle('block');
    HideMenu.classList.remove('hidden');
  }

  const HideMenuMovil = () => {
      const HideMenu = document.getElementById('HideMenu');
      setHideMenu(true);
      HideMenu.classList.remove('block'); 
      HideMenu.classList.toggle('hidden');
  }
  

  window.addEventListener('scroll', ()=> {

    let fixed = document.getElementById('fijado');
    if (window.scrollY > TamañoMin){

      fixed.classList.remove('fijado-no');
      fixed.classList.add('fixed');
      fixed.classList.add('top-[0vh]');

    }
    if(window.scrollY < TamañoMin){
      fixed.classList.remove('fixed');
      fixed.classList.remove('top-[0vh]');
      fixed.classList.add('fijado-no');
    }
  });

  return (
    <header>
          {error? <HeaderDefault/>: null}
          
          {loading? <HeaderDefault/>:  <HeaderContentFetch props={data.generalSettings}/>}
        
          {/* menú */}
        <div className='bg-white w-full drop-shadow-lg fijado-no z-20' id='fijado' >

          {/*Escritorio*/}
          <div className='hidden xl:block'>
            <div className='flex flex-row justify-between py-5 text-black font-Volkhov px-[3rem]'>
              <Link to={`/`} className="w-full text-center py-5 no-underline hvr-underline-from-left">
                INICIO
              </Link>
              <Link to={`/categories/negocios`} className="w-full text-center py-5 no-underline hvr-underline-from-left">
                NEGOCIOS
              </Link>
              <Link to={`/categories/marloports`}  className='w-full text-center py-5 no-underline hvr-underline-from-left'>
                MARLOPORTS
              </Link>
              <Link to={`/categories/actualidad`} className='w-full text-center py-5 no-underline hvr-underline-from-left'>
                ACTUALIDAD
              </Link>
              <Link to={`/categories/sociedad`} className='w-full text-center py-5 no-underline hvr-underline-from-left'>
                SOCIEDAD
              </Link>
              <Link to={`/tarifario`} className='w-full text-center py-5 no-underline hvr-underline-from-left'>
                TARIFARIO
              </Link>
            </div>
          </div>

          {/*Movil*/}
          <div className='block xl:hidden'>
            <div className='flex flex-row py-1 items-center'>
              {
                hideMenu ?
                  <button className='flex items-center px-2 py-1 rounded animate__animated animate__zoomIn bg-black ml-2 my-3' onClick={ShowMenuMovil}>
                    <FontAwesomeIcon icon={faBars} className='text-white  text-[1.5rem]' />
                  </button>
                :
                  <button className='flex items-center px-2 py-1 rounded border-2 border-black bg-white animate__animated animate__rotateIn ml-2 my-3' onClick={HideMenuMovil}>
                    <FontAwesomeIcon icon={faBars} className='text-black  text-[1.5rem]' />
                  </button>
              }
              <Link to='/'>
                <img 
                    src={RVLOGO}
                    alt='Rendez-Vous Magazine'
                    className='w-[25%] mx-auto md:w-[10%]'
                />
              </Link>
            </div>
            <div className='flex flex-col mb-3 px-6 items-center hidden' id='HideMenu'>
              <Link to={`/`} className='w-full text-center font-Volkhov pb-3 no-underline animate__animated animate__fadeInLeft hvr-underline-from-left mt-3 mb-2'>
                INICIO
              </Link>
              <Link to={`/categories/NEGOCIOS`} className='w-full text-center font-Volkhov pb-3 no-underline animate__animated animate__fadeInLeft hvr-underline-from-left mt-3 mb-2'>
                NEGOCIOS
              </Link>
              <Link to={`/categories/MARLOPORTS`} className='w-full text-center font-Volkhov pb-3 no-underline animate__animated animate__fadeInLeft hvr-underline-from-left mt-3 mb-2'>
                MARLOPORTS
              </Link>
              <Link to={`/categories/ACTUALIDAD`} className='w-full text-center font-Volkhov pb-3 no-underline animate__animated animate__fadeInLeft hvr-underline-from-left mt-3 mb-2'>
                ACTUALIDAD
              </Link>
              <Link to={`/categories/SOCIEDAD`} className='w-full text-center font-Volkhov pb-3 no-underline animate__animated animate__fadeInLeft hvr-underline-from-left mt-3 mb-2'>
                SOCIEDAD
              </Link>
              <Link to={`/tarifario`} className='w-full text-center font-Volkhov pb-3 no-underline animate__animated animate__fadeInLeft hvr-underline-from-left mt-3 mb-2'>
                TARIFARIO
              </Link>
            </div>
          </div>
        </div>
        {/* Slider */}

        <div className='mt-6 md:w-[75%] md:mx-auto px-3'>
          <Slider/>
        </div>
    </header>
  );
};
