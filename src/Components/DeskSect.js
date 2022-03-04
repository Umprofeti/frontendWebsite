import React from 'react';
import { useQuery } from '@apollo/client';
import { ConatinerArticle4 } from './ConatinerArticle4';
import { ContainerArticle3 } from './ContainerArticle3';

/* Queries */

import { getDescatadaNegocios } from '../Query/getDestacadaNegocios';
import { getSectionNegocios } from '../Query/getSectionNegocios';
import { getDescatadaMarloports } from '../Query/getDestacadaMarloports';
import { getSectionMarloports } from '../Query/getSectionMarloports';
import { getDescatadaActualidad } from '../Query/getDestacadaActualidad';
import {getSectionActualidad} from '../Query/getSectionActualidad';
import { ContainerLoading3 } from './ContainerLoading3';
import { ConatinerLoading4 } from './ConatinerLoading4';


export const DeskSect = () => {

    const {loading: loadingDestNegocios, error:errorDestNegocios, data:dataDestNegocios} = useQuery(getDescatadaNegocios);
    const {loading: loadingSectNegocios, error:errorSectNegocios, data:dataSectNegocios} = useQuery (getSectionNegocios);
    const {loading: loadingDestMarlo, error:errorDestMarlo, data:dataDestMarlo} = useQuery(getDescatadaMarloports);
    const {loading: loadingSectMarlo, error:errorSectMarlo, data:dataSectMarlo} = useQuery(getSectionMarloports);
    const {loading: loadingDestActu, error:errorDestActu, data:dataDestActu} = useQuery(getDescatadaActualidad);
    const {loading: loadingSectActu, error:errorSectActu, data:dataSectActu} = useQuery (getSectionActualidad);

    let PostsNegocios = []
    let PostMarlo = []
    let PostActu = []
    

    const ShowPostDest = (error, data) => {
        if(error) return <span>Error {error.message}</span>
         return (<ContainerArticle3 props={data.tags.edges[0].node.posts.edges[0].node} key={data.tags.edges[0].node.posts.edges[0].node.id} />); 
        
    }

    const ShowPostsSect = (error, data, PostSect) => {
        let Post = PostSect;
        if(error) return <span>Error {error.message}</span>
         data.posts.edges.map((post)=> {
            return (Post = [...Post, <ConatinerArticle4 props={post.node} key={post.node.id} />])
        }) 
        return Post;
    }

  return (
    <div className='flex flex-col px-9 mt-9' key='desktop-section-posts'>
        <div className='flex flex-col' key='container-section-0'>
            <div className='flex flex-row items-center justify-between' key='section-0'>
                <p className='font-Metropolis text-[0.9rem]'>@rendezvousmagazinel</p>
                <div className='border border-black w-full'></div>
                <span className='bg-black px-2 py-1 font-Volkhov text-white text-left w-[40%]'>NEGOCIOS</span>
            </div>
            <div className='flex flex-col'>
                {loadingDestNegocios? <ContainerLoading3/>: ShowPostDest(errorDestNegocios, dataDestNegocios)}
                <div className='grid grid-rows-1 grid-flow-col gap-4'>
                    {loadingSectNegocios? <ConatinerLoading4/>: ShowPostsSect(errorSectNegocios, dataSectNegocios, PostsNegocios)}
                </div>
            </div>
        </div>
        <div className='flex flex-col' key='container-section-1'>
            <div className='flex flex-row items-center justify-between' key='section-1'>
                <p className='font-Metropolis text-[0.9rem]'>@rendezvousmagazinel</p>
                <div className='border border-black w-full'></div>
                <span className='bg-black px-2 py-1 font-Volkhov text-white text-left w-[40%]'>MARLOPORTS</span>
            </div>
            <div className='flex flex-col'>
                {loadingDestMarlo? <ContainerLoading3/>: ShowPostDest(errorDestMarlo, dataDestMarlo)}
                <div className='grid grid-rows-1 grid-flow-col gap-4'>
                    {loadingSectMarlo? <ConatinerLoading4/>: ShowPostsSect(errorSectMarlo, dataSectMarlo, PostMarlo)}
                </div>
            </div>
        </div>
        <div className='flex flex-col' key='container-section-2'>
            <div className='flex flex-row items-center justify-between' key='section-2'>
                <p className='font-Metropolis text-[0.9rem]'>@rendezvousmagazinel</p>
                <div className='border border-black w-full'></div>
                <span className='bg-black px-2 py-1 font-Volkhov text-white text-left w-[40%]'>ACTUALIDAD</span>
            </div>
            <div className='flex flex-col'>
                {loadingDestActu? <ContainerLoading3/>: ShowPostDest(errorDestActu, dataDestActu)}
                <div className='grid grid-rows-1 grid-flow-col gap-4'>
                    {loadingSectActu? <ConatinerLoading4/>: ShowPostsSect(errorSectActu, dataSectActu, PostActu)}
                </div>
            </div>
        </div>
    </div>
  )
}
