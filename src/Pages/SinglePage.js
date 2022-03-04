import React from 'react';
import { Footer } from '../Components/Footer';
import { Header } from '../Components/Header';
import { useParams } from 'react-router-dom';
import {Helmet} from "react-helmet";
import gql from 'graphql-tag';
import '../index.css';
import { useQuery } from '@apollo/client';
import { ContentPostLoading } from '../Components/ContentPostLoading';


const formatDate = (time)=>{
  let time2 = new Date(time);

  const months = ["Enero", "Febrero", "Marzo","Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  let formatted_date = time2.getDate() + " De " + months[time2.getMonth()] + " Del " + time2.getFullYear()
  return formatted_date;
}
export const SinglePage = () => {
    const {slug} = useParams();


    const getPost = gql`query getContentPost {
      postBy(slug: "${slug}") {
        blocks {
          ... on CoreParagraphBlock {
            attributes {
              ... on CoreParagraphBlockAttributes {
                content
                dropCap
              }
            }
            name
          }
          ... on CoreVerseBlock {
            attributes {
              ... on CoreVerseBlockAttributes {
                content
                textAlign
              }
            }
            name
          }
          ... on CoreImageBlock {
            attributes {
              ... on CoreImageBlockAttributes {
                url
              }
            }
            name
          }
          ... on CoreHeadingBlock {
            attributes {
              ... on CoreHeadingBlockAttributes {
                textAlign
                content
              }
            }
            name
          }
        }
        author {
          node {
            name
          }
        }
        date
        id
        title
        featuredImage {
          node {
            mediaItemUrl
          }
        }
        excerpt
      }
    }`;

      const {loading, error, data} = useQuery(getPost);

      const MetaTag = (data) => {
        const excerpt = data.excerpt.replace(/<.+?>/, '').replace(/<.+?>/, '');
        return (
          <Helmet key={`articleMeta-TAGs`}>
            <title>{data.title}</title>
            <meta name='title' content={`${data.title}`}/>
            <meta name="description" content={`${excerpt}`}/>
            <meta property='og:type' content='article'/>
            <meta property='og:url' content={`${process.env.REACT_APP_DOMAIN}${slug}`}/>
            <meta property="og:title" content={`${data.title}`}/>
            <meta property='og:image' itemprop="image" content={`${data.featuredImage.node.mediaItemUrl}`}/> 
            <meta property='og:description' content={`${excerpt}`}/>
            {/* Twitter Meta Tags */}
            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content={`${process.env.REACT_APP_DOMAIN}${slug}`}/>
            <meta property="twitter:title" content={`${data.title}`}/>
            <meta property="twitter:description" content={`${excerpt}`}/>
            <meta property="twitter:image" content={`${data.featuredImage.node.mediaItemUrl}`}/>
          </Helmet>
        );
      }

      let ContentPost = [];
      const ShowContent = (data) => {
        ContentPost = [...ContentPost, 
          <div key={data.key} className='px-9 py-3 w-full shadow-md'>
            <h4 className='font-Volkhov text-[1.3rem] text-center mb-5 md:text-[1.8rem]' key='post-title'>{data.title}</h4>
            <p className='font-Volkhov text-[0.8rem] italic' key='post-meta-data'>Por: {data.author.node.name} - {formatDate(data.date)}</p>
          </div>
        ] 

        data.blocks.map((block, key)=> {
          switch (block.name) {
            case 'core/image':
                
               ContentPost = [...ContentPost, <img src={block.attributes.url} alt='IMG post' className='w-full mx-auto mt-9 mb-6 xl:w-[50%]' key={key} />]
            break;
            case 'core/paragraph':
               if(block.attributes.dropCap){
                ContentPost = [...ContentPost,<p className='font-Volkhov first-letter:uppercase first-letter:text-7xl first-letter:font-bold first-letter:mt-9 first-letter:text-[#ad8d32] text-left mt-3' dangerouslySetInnerHTML={{__html:block.attributes.content}} key={key}></p>];
               }else{
                ContentPost = [...ContentPost,<p className='font-Volkhov text-left mt-3 mb-3' dangerouslySetInnerHTML={{__html:block.attributes.content}} key={key}></p>];
               }
            break;
            case 'core/heading':
              switch (block.attributes.textAlign) {
                case 'left':
                  ContentPost = [...ContentPost, <h5 className='font-Volkhov text-left my-6 text-[1.2rem] font-semibold md:text-[1.5rem]' key={key}>{block.attributes.content}</h5>]
                break;
                case 'center':
                  ContentPost = [...ContentPost, <h5 className='font-Volkhov text-center my-6 text-[1.2rem] font-semibold md:text-[1.5rem]' key={key}>{block.attributes.content}</h5>]
                break;
                case'right':
                ContentPost = [...ContentPost, <h5 className='font-Volkhov text-right my-6 text-[1.2rem] font-semibold md:text-[1.5rem]' key={key}>{block.attributes.content}</h5>]
                break;
                default:
                  ContentPost = [...ContentPost, <h5 className='font-Volkhov text-center my-6 text-[1.2rem] font-semibold md:text-[1.5rem]' key={key}>{block.attributes.content}</h5>]
                break;
              }
            break;
            case 'core/verse':
              switch(block.attributes.textAlign){
                case 'left':
                  ContentPost = [...ContentPost,<p className='font-Volkhov italic text-left mt-1'key={key}
                  dangerouslySetInnerHTML={{__html:block.attributes.content}}></p>];
                break;
                case 'center':
                  ContentPost = [...ContentPost,<p className='font-Volkhov italic text-center mt-1'key={key}
                  dangerouslySetInnerHTML={{__html:block.attributes.content}}></p>];
                break;
                case 'right':
                  ContentPost = [...ContentPost,<p className='font-Volkhov italic text-right mt-1'key={key}  dangerouslySetInnerHTML={{__html:block.attributes.content}}></p>];
                break;
              }
            break;
            
          }
        })

        return(
          <>
          <div className='px-2 mb-9 xl:px-[3.5rem]' key='content-post'>{ContentPost}</div>
          {MetaTag(data)}
          </>
        );

      }
      

  return (
    <>
        <Header/>
        <div key='container-post' className='mt-12'>
          {error? window.location.reload():null}
          {loading? <ContentPostLoading/>: ShowContent(data.postBy)}
        </div>

        <Footer/>
    </>
  )
}
