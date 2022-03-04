import React from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import AliceCarousel from 'react-alice-carousel';

import '../index.css';
import 'react-alice-carousel/lib/alice-carousel.css';

const getSliders = gql`query getSliders {
    sliders(first: 10) {
      edges {
        node {
          id
          excerpt
          featuredImage {
            node {
              title
              mediaItemUrl
            }
          }
        }
      }
    }
  }`;




export const Slider = () => {
    let items=[];
    const {loading, error, data} = useQuery(getSliders);
    if(error) return `Error ${error.message}`;
    const ImgSlider = () => {
        data.sliders.edges.map((slider)=> {
            const {mediaItemUrl, title} = slider.node.featuredImage.node;
            const link = slider.node.excerpt;
            let regexp = new RegExp(/[<p>](?:[Aa-zZ])?[</p>]/g);
            const id= slider.node.id; 
            const newLink = link.replace(regexp,' ')
            items = [...items,<a key={id} href={newLink}><img src={mediaItemUrl} alt={title} /></a>];
            return (items);
        });
    }
    
    return (
    <>
        {loading ? <div className='w-full bg-gray-300 animate-pulse h-[250px]'></div> 
        : ImgSlider(), 
        <AliceCarousel 
            autoPlay
            autoPlayInterval={2000}
            animationDuration={1000}
            infinite
            touchTracking={false}
            disableDotsControls
            disableButtonsControls
            items={items}
          />}
    </>
  );
}
