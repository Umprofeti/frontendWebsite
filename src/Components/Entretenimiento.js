import React from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import AliceCarousel from 'react-alice-carousel';
import '../index.css';
import 'react-alice-carousel/lib/alice-carousel.css';

const getEntretenimiento = gql`
query getEntretenimiento {
  entreteiminetos(first: 10) {
    edges {
      node {
        id
        excerpt
        featuredImage {
          node {
            mediaItemUrl
            title
            id
          }
        }
        entretenimientocampo {
          seccion
        }
      }
    }
  }
}`;
  
  const responsive= {
      0:{items:3},
      767:{items:5},
      1023:{items:6},
      1280:{items:8}
  }
  
  export const Entretenimiento = () => {

    let items = []; 
    const {loading, error, data}= useQuery(getEntretenimiento);
    if(error) window.location.reload();

    const EntretenimientoPosts = ()=> {
        data.entreteiminetos.edges.map((entretenimiento)=> {
            const link = entretenimiento.node.excerpt;
            const {id,mediaItemUrl, title}= entretenimiento.node.featuredImage.node;
            const idItem = entretenimiento.node.id;
            let regexp = new RegExp(/[<p>](?:[Aa-zZ])?[</p>]/g);
            const newLink = link.replace(regexp,' ');
            items= [...items, <a href={newLink} key={idItem} ><img src={mediaItemUrl} key={id} alt={title} className='rounded-full w-[100%] xl:w-[90%] p-1 border-2 border-[#ad8d32] hover:border-[black] hover:animate-pulse ml-0 mr-3'/></a>];
            return(items);
        });

        return(
          <AliceCarousel 
                autoPlay
                mouseTracking 
                infinite
                touchTracking={false}
                items={items} 
                responsive={responsive}  
                disableDotsControls  
                autoPlayInterval={2000}  
                animationDuration={1000}
            />
        );
    }

  return (
    <div className='my-3 xl:px-9 px-2'>
        <h4 className='font-Volkhov text-left text-[1rem] px-2 mb-6 xl:px-6 xl:text-[1.9rem] '>entrenenimiento</h4>
        {loading? <span>Cargando...</span>: EntretenimientoPosts()}
    </div>
  )
}
