import React, {useEffect} from 'react';
import ReactPlayer from 'react-player';
import { useQuery } from '@apollo/client';
import '../index.css';
import 'animate.css';

/*--------------Components---------------------------*/
import { ContainerArticle } from './ContainerArticle';
import { ContainerArticle2 } from './ContainerArticle2';
import { ConatinerIMG } from './ConatinerIMG';
import { ContainerArticle3 } from './ContainerArticle3';
import { ConatinerArticle4 } from './ConatinerArticle4';

/*----------------Helpers--------------------------- */
import { SizeWindow } from '../Helpers/getSizeWindow';

/*---------------------Queries---------------------- */
import { getPostSociedad } from '../Query/getPostSociedad';
import { getPostActualidad } from '../Query/getPostActualidad';
import { getPostNegocios } from '../Query/getPostNegocios';
import { getPostsMarloports } from '../Query/getPostMarloports';
import { getSectionSociedad } from '../Query/getSectionSociedad';
import { getDescatadaActualidad } from '../Query/getDestacadaActualidad';
import { getSectionActualidad } from '../Query/getSectionActualidad';
import { getSectionMarloports } from '../Query/getSectionMarloports';
import { getDescatadaMarloports } from '../Query/getDestacadaMarloports';
import { getSectionNegocios } from '../Query/getSectionNegocios';
import { getDescatadaNegocios } from '../Query/getDestacadaNegocios';
import { ConatinerLoading } from './ConatinerLoading';
import { ContainerLoading2 } from './ContainerLoading2';
import { ContainerLoading3 } from './ContainerLoading3';
import { ConatinerLoading4 } from './ConatinerLoading4';
/*----------------Component-------------------------*/

  
export const PostStyleMovil = () => {
    useEffect(() => {
        SizeWindow();
    }, []);
    
    const StyleVideo = {
      margin: 'auto',
      width: '100%',
      display: 'block',
      padding: '2%',
      'aspect-ratio': '16 / 9'
    }

    /*----------------Post with tag----------------------*/
    const {loading:loadingDestActualidad, error:errorDestActualidad, data:dataDestActualidad} = useQuery(getDescatadaActualidad);
    const {loading:loadingDestMarloports, error:errorDestMarloports, data:dataDestMarloports} = useQuery(getDescatadaMarloports);
    const {loading:loadingDestNegocios, error:errorDestNegocios, data:dataDestNegocios} = useQuery(getDescatadaNegocios);
    /*-------------------Last Posts of every section-------------*/
    const {loading:loadingSociedad, error:errorSociedad, data:dataSociedad } = useQuery(getPostSociedad);
    const {loading:loadingActualidad, error:errorActualidad, data:dataActualidad} = useQuery(getPostActualidad);
    const {loading:loadingNegocios, error:errorNegocios, data:dataNegocios} = useQuery(getPostNegocios);
    const {loading:loadingMarloports, error:errorMarloports, data:dataMarloports} = useQuery(getPostsMarloports);

    /*------------------Six last post of seccion "Sociedad"-------*/
    const {loading:loadingSectionSociedad, error:errorSectionSociedad, data:dataSectionSociedad} = useQuery(getSectionSociedad);
    /*----------------For last post of Seccion Actualidad---------*/

    const {loading:loadingSectionActualidad, error:errorSectionActualidad, data:dataSectionActualidad}= useQuery(getSectionActualidad);
    const {loading:loadingSectionMarloports, error:errorSectionMarloports, data:dataSectionMarloports} = useQuery(getSectionMarloports);
    const {loading:loadingSectionNegocios, error:errorSectionNegocios, data:dataSectionNegocios} = useQuery(getSectionNegocios);
    if(errorActualidad) window.location.reload();
    if(errorSociedad) window.location.reload();
    if(errorNegocios) window.location.reload();
    if(errorNegocios) window.location.reload();
    if(errorSectionSociedad) window.location.reload();
    if(errorDestActualidad) window.location.reload();
    if(errorDestMarloports || errorDestNegocios || errorMarloports || errorSectionActualidad || errorSectionMarloports || errorSectionNegocios){
      window.location.reload();
    }
    
    
  return (
    <div className='flex flex-col px-1 overflow-hidden animate__animated animate__slideInLeft'>
      <div className='py-6 border-dashed border-b-2 border-gray-500 w-full'>
        <ReactPlayer style={StyleVideo} width='100%' controls={true} height='%' url= 'https://www.youtube.com/watch?v=KRMpZvG_9_w&feature=emb_logo' />
      </div>
      <div className='mt-6'>
        {loadingSociedad? <ConatinerLoading/>:<ContainerArticle props={dataSociedad.posts.edges[0].node}/>}
        {loadingActualidad?  <ConatinerLoading/>: <ContainerArticle props={dataActualidad.posts.edges[0].node}/>} 
        {loadingNegocios?  <ConatinerLoading/>: <ContainerArticle props={dataNegocios.posts.edges[0].node}/>} 
        {loadingMarloports?  <ConatinerLoading/>: <ContainerArticle props={dataMarloports.posts.edges[0].node}/>} 
      </div>
      <div className='mt-6'>
        <div className='pl-1 mb-3'>
          <p className='text-white py-3 px-3 bg-black font-Volkhov'>NEGOCIOS</p>
        </div>
        <div className='mb-6'>
          {loadingDestNegocios? <ContainerLoading3/>:<ContainerArticle3 props={dataDestNegocios.tags.edges[0].node.posts.edges[0].node}/>}
          {loadingSectionNegocios? <ConatinerLoading4 />
          : 
            <div>
              <ConatinerArticle4 props={dataSectionNegocios.posts.edges[0].node}/>
              <ConatinerArticle4 props={dataSectionNegocios.posts.edges[1].node}/>
              <ConatinerArticle4 props={dataSectionNegocios.posts.edges[2].node}/>
              <ConatinerArticle4 props={dataSectionNegocios.posts.edges[3].node}/>
            </div> 
          }
        </div>
      </div>
      <div className='mt-6'>
        <div className='pl-1 mb-3'>
          <p className='text-white py-3 px-3 bg-black font-Volkhov'>MARLOPORTS</p>
        </div>
        <div className='mb-6'>
          {loadingDestMarloports? <ContainerLoading3/>:<ContainerArticle3 props={dataDestMarloports.tags.edges[0].node.posts.edges[0].node}/>}
          {loadingSectionMarloports? <ConatinerLoading4/>
          : 
            <div>
              <ConatinerArticle4 props={dataSectionMarloports.posts.edges[0].node}/>
              <ConatinerArticle4 props={dataSectionMarloports.posts.edges[1].node}/>
              <ConatinerArticle4 props={dataSectionMarloports.posts.edges[2].node}/>
              <ConatinerArticle4 props={dataSectionMarloports.posts.edges[3].node}/>
            </div> 
          }
        </div>
      </div>
      <div className='mt-6'>
        <div className='pl-1 mb-3'>
          <p className='text-white py-3 px-3 bg-black font-Volkhov'>ACTUALIDAD</p>
        </div>
        <div className='mb-6'>
          {loadingDestActualidad? <ContainerLoading3/>:<ContainerArticle3 props={dataDestActualidad.tags.edges[0].node.posts.edges[0].node}/>}
          {loadingSectionActualidad? <ConatinerLoading4/>
          : 
            <div>
              <ConatinerArticle4 props={dataSectionActualidad.posts.edges[0].node}/>
              <ConatinerArticle4 props={dataSectionActualidad.posts.edges[1].node}/>
              <ConatinerArticle4 props={dataSectionActualidad.posts.edges[2].node}/>
              <ConatinerArticle4 props={dataSectionActualidad.posts.edges[3].node}/>
            </div> 
          }
        </div>
      </div>
      <div className='mt-6'>
        <div className='pl-1 mb-3'>
          <p className='text-white py-3 px-3 bg-black font-Volkhov'>SOCIEDAD</p>
        </div>
        <div>
          <ConatinerIMG />
          {loadingSectionSociedad?<ContainerLoading2/> :
           <div>
             <ContainerArticle2 props={dataSectionSociedad.posts.edges[1].node}/>
             <ContainerArticle2 props={dataSectionSociedad.posts.edges[2].node}/>
             <ContainerArticle2 props={dataSectionSociedad.posts.edges[3].node}/>
             <ContainerArticle2 props={dataSectionSociedad.posts.edges[4].node}/>
             <ContainerArticle2 props={dataSectionSociedad.posts.edges[5].node}/>
             <ContainerArticle2 props={dataSectionSociedad.posts.edges[6].node}/>
           </div> 
          }
        </div>
      </div>
    </div>
  );
};
