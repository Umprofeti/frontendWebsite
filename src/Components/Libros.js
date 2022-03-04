import React from 'react'
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { Libro } from './Libro';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const getLibros = gql`query getLibros {
  libros(first: 10) {
    edges {
      node {
        id
        title
        libroCampos {
          author
          link
        }
        excerpt
        featuredImage {
          node {
            id
            mediaItemUrl
            title
          }
        }
      }
    }
  }
}`;

const responsive= {
  0:{items:1},
  767:{items: 2},
  1280:{items:3}
}

export const Libros = () => {
  const {loading, error, data} = useQuery(getLibros);
  let LibrosPosts = [];
  
  const ShowPostLibro = ()=> {

    if(data.libros !== null){
      data.libros.edges.map((libro)=> {
        return(LibrosPosts= [...LibrosPosts, <Libro props={libro.node}/>]);
      })
    }else{
      return(window.location.reload());
    }

  }
  
  return (
    <div className='py-3 xl:px-9 px-2'>
        <h4 className='font-Volkhov text-left text-[1rem] px-2 mb-6 xl:px-6 xl:text-[1.9rem] '>libros</h4>
        {error ? <div className='w-full flex items-center  justify-center'><span>Error al cargar los libros, intenta recargar la página.</span></div>: null}
        {loading? <span>Cargando...</span>
        : ShowPostLibro(),<AliceCarousel 
                              items={LibrosPosts} autoPlayInterval={4000}
                              animationDuration={1000} responsive={responsive} 
                              autoPlay infinite disableDotsControls touchTracking={false}/>}
    </div>
  )
}
