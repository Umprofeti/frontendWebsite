import React from 'react';
import { ContainerArticle } from './ContainerArticle';
import ReactPlayer from 'react-player';
import { useQuery } from '@apollo/client';
import { getPostSociedad } from '../Query/getPostSociedad';
import { getPostActualidad } from '../Query/getPostActualidad';
import { getPostNegocios } from '../Query/getPostNegocios';
import { getPostsMarloports } from '../Query/getPostMarloports';
import '../index.css';
import { DesktSectSociedad } from './DesktSectSociedad';
import { DeskSect } from './DeskSect';
import { ConatinerLoading } from './ConatinerLoading';

export const PostStyleDesktop = () => {
  const StyleVideo = {
    margin: 'auto 0px auto',
    width: '100%',
    display: 'block',
    padding: '2%'
  }
  const {loading:loadingSociedad, error:errorSociedad, data:dataSociedad } = useQuery(getPostSociedad);
  const {loading:loadingActualidad, error:errorActualidad, data:dataActualidad} = useQuery(getPostActualidad);
  const {loading:loadingNegocios, error:errorNegocios, data:dataNegocios} = useQuery(getPostNegocios);
  const {loading:loadingMarloports, error:errorMarloports, data:dataMarloports} = useQuery(getPostsMarloports);

  if(errorActualidad) window.location.reload();
  if(errorSociedad) window.location.reload();
  if(errorNegocios) window.location.reload();
  if(errorNegocios || errorMarloports) window.location.reload();
  return (
    <div className='flex flex-col mt-9 bg-white'>
        <div className='flex flex-row mt9 bg-white'>
          <div className='border-r-2 border-black w-[25%] pl-6'>
            {loadingSociedad ? <ConatinerLoading/>: <ContainerArticle props={dataSociedad.posts.edges[0].node} key='post-sociedad'/>}
            {loadingActualidad ? <ConatinerLoading/>: <ContainerArticle props={dataActualidad.posts.edges[0].node} key='post-actualidad' />}
          </div>
          <div className='my-auto w-[50%] aspect-video'>
            <ReactPlayer style={StyleVideo} width='100%' controls={true} height='60vh' url= 'https://www.youtube.com/watch?v=KRMpZvG_9_w&feature=emb_logo' />
          </div>
          <div className='border-l-2 border-black w-[25%] pr-6'>
            {loadingNegocios? <ConatinerLoading/>: <ContainerArticle props={dataNegocios.posts.edges[0].node} key='post-negocio' /> }
            {loadingMarloports? <ConatinerLoading/>: <ContainerArticle props={dataMarloports.posts.edges[0].node} key='post-marloports'/> }
          </div>
        </div>
        <DeskSect />
        <DesktSectSociedad/>
    </div>
  );
};
