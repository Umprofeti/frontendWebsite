import React from 'react'
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { Destino } from './Destino';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const getDestinos = gql`
query getDestinos {
    hoteles(first: 10) {
      edges {
        node {
          title
          id
          featuredImage {
            node {
              mediaItemUrl
              title
              id
            }
          }
          destinocampo {
            descripcion
            link
            puntuacion
          }
        }
      }
    }
  }`;

  const responsive= {
    0:{items:2},
    767:{items:4},
    1280:{items:6}
  }
  

export const Destinos = () => {
    let DestinoPost = [];
    const {loading, error, data} = useQuery(getDestinos);

    const ShowPostDestino = () => {
        data.hoteles.edges.map((destino)=> {
            return (DestinoPost= [...DestinoPost, <Destino props={destino.node}/>])
        })
    }

  return (
    <div className='xl:px-9 px-2 snap-x'>
        <h4 className='font-Volkhov text-left text-[1rem] px-2 mb-6 xl:px-6 xl:text-[1.9rem] '>destinos</h4>
        {loading?<span>Cargando destinos...</span>
        : ShowPostDestino(), <AliceCarousel items={DestinoPost} responsive={responsive} 
                                            autoPlay infinite autoPlayInterval={3000}
                                            animationDuration={1000} disableDotsControls />
        }
    </div>
  )
}
