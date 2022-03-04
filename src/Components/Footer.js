import React from 'react';
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
export const Footer = () => {
  return (
    <>
        <div className='flex items-center justify-start w-[100%] xl:w-[40%]'>
            <Link to='/post/rendez-vous-magazine-latina'> 
                <img  src={`${process.env.REACT_APP_GRAPHQL_DOMAIN}wp-content/uploads/2021/09/image.svg`} className='w-full' alt='CARTA-EDITORIAL'/>
            </Link>
        </div>
        <footer className='flex flex-col  bg-black justify-center'>
            <div className='flex flex-col md:flex-row justify-center md:mt-9'>
                <div className='text-center mt-[2rem] flex items-center justify-center md:w-[33.3%]'>
                    <Link to={'/post/rendez-vous-magazine'}>
                        <span className='text-white font-Volkhov no-underline py-5 mb-6'>CONÓCENOS</span>
                    </Link> 
                </div>
                <div className='md:w-[33.3%]'>
                    <figure>
                        <a href='/'>
                            <img
                                src={`${process.env.REACT_APP_GRAPHQL_DOMAIN}wp-content/uploads/2021/09/RV-LBlanco-300x240.png`} 
                                alt='RV LOGO'
                                className='mx-auto px-6'
                            />
                        </a>
                    </figure>
                </div>
                <div className='text-center mt-[2rem] flex items-center justify-center md:w-[33.3%]'>
                    <div className='flex flex-row justify-between w-[50%] '>
                        <a href='https://www.instagram.com/rendezvousmagazinel/' ><FontAwesomeIcon className='text-white text-[2rem] md:mx-3 hover:animate-pulse' icon={faInstagram} /></a>
                        <a href='https://twitter.com/Rendezvousmagaz?t=tNXNx84bJK2rfg4boOfJYA&s=09' ><FontAwesomeIcon className='text-white text-[2rem] md:mx-3 hover:animate-pulse' icon={faTwitter}/></a>
                        <a href='https://www.youtube.com/channel/UCcuQ_U31yTacoQ_aUpDoqUQ' ><FontAwesomeIcon className='text-white text-[2rem] md:mx-3 hover:animate-pulse' icon={faYoutube}/></a>
                    </div>
                </div>
            </div>
            <div className='mt-[2rem] text-center px-6 mb-6'>
                <p className='text-gray-100 font-Volkhov'>Copyright. Todos los derechos reservados a: <span className='font-Metropolis'>RENDEZ-VOUS magazine</span></p>
            </div>
        </footer>
    </>
  );
};
