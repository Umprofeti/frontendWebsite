import React from 'react'
import { useQuery } from '@apollo/client';
import { ConatinerIMG } from './ConatinerIMG';
import { getSectionSociedad } from '../Query/getSectionSociedad';
import { ContainerArticle2 } from './ContainerArticle2';
import { ContainerLoading2 } from './ContainerLoading2';

export const DesktSectSociedad = () => {

    const {loading, error, data} = useQuery(getSectionSociedad);
    let Posts = []
    const ShowPostsSociedad = (error, data) => {
        if(error) return(<span>Error! {error.message}</span>);
        data.posts.edges.map((post)=> {
            return (Posts = [...Posts, <ContainerArticle2 props={post.node} key={post.node.id} />]);
        });
    }
  return (
    <div className='flex flex-col px-9 mt-6'>
        <div className='flex flex-row items-center justify-between'>
            <p className='font-Metropolis text-[0.9rem]'>@rendezvousmagazinel</p>
            <div className='border border-black w-full'></div>
            <span className='bg-black px-2 py-1 font-Volkhov text-white text-left w-[40%]'>SOCIEDAD</span>
        </div>
        <div className='flex flex-row mt-6 overflow-hidden max-h-[80vh] shadow-inner-lg '>
            <div className='w-[33%]'>
                <ConatinerIMG key='img-revista-desktop' />
            </div>
            {loading?<ContainerLoading2/>: ShowPostsSociedad(error,data), <div className='grid grid-cols-2 pr-6 overflow-y-scroll scroll-sociedad overflow-x-hidden'>{Posts}</div>}
        </div>
    </div>
  )
}
