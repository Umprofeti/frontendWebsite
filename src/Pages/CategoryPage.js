import React from 'react';
import { Footer } from '../Components/Footer';
import { Header } from '../Components/Header';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import RVLogo from "../img/RV logo.png";
import { useQuery } from '@apollo/client';
import { ConatinerArticle4 } from '../Components/ConatinerArticle4';
import gql from 'graphql-tag';
import { CategoryLoading } from '../Components/CategoryLoading';




  const updateQuery = (previousResult, { fetchMoreResult }) => {
    return fetchMoreResult.posts.edges.length ? fetchMoreResult : previousResult;
  };

const Post = ({data, error, loading, fetchMore, category}) =>{
      const {posts} = data;

    return(
        <div className='xl:px-12 mt-12 lg:px-3'>
            <h2 className='font-Volkhov text-[1.9rem] text-center uppercase'>{category}</h2>
            {posts && posts.edges ? (
                <div className=''>
                    <div className='grid xl:grid-cols-4 xl:gap-4 grid-cols-1 gap-0 md:grid-cols-2 md:gap-0 lg:grid-cols-3'>
                        {posts.edges.map(edge => {
                            const {node} = edge;
                            return (
                                <ConatinerArticle4 props={node}/>
                            );
                        })}
                    </div>
                    <div className='flex justify-center'>
                        {posts.pageInfo.hasPreviousPage?(
                            <button
                            onClick={() => {
                              fetchMore({
                                variables: {
                                  first: null,
                                  after: null,
                                  last: 24,
                                  before: posts.pageInfo.startCursor || null
                                },
                                updateQuery
                              });
                            }}
                            className='mx-2 px-3 py-2 rounded-sm font-Metropolis bg-[#a58d32] my-6'
                          >
                            Anterior
                          </button>
                        ):null}
                        {posts.pageInfo.hasNextPage ? (
                            <button
                                onClick={() => {
                                fetchMore({
                                    variables: {
                                    first: 24,
                                    after: posts.pageInfo.endCursor || null,
                                    last: null,
                                    before: null
                                    },
                                    updateQuery
                                });
                                }}
                                className='mx-2 px-3 py-2 rounded-sm font-Metropolis bg-[#a58d32] my-6'
                            >
                                Siguiente
                            </button>
                        ):null}
                    </div>
                </div>

            ): console.log('no posts')}
        </div>
    );

}; 

const PostContent = () => {
    const {category} = useParams();
    const getPostsCategory = gql`
query getPostsCategory($first: Int, $last: Int, $after: String, $before: String){
    posts(
      where: {categoryName: "${category}"}
      first: $first
      last: $last
      after: $after
      before: $before
    ) {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {
        node {
          id
          slug
          title
          featuredImage {
            node {
              mediaItemUrl
              title
              id
            }
          }
          author {
            node {
              name
              id
            }
          }
        }
        cursor
      }
    }
  }`;
    const variables = {
        first: 24,
        last: null,
        after: null,
        before: null
    }

    const { data, error, loading, fetchMore } = useQuery(getPostsCategory, {
        variables
    });

    if(error){
        return <p>{JSON.stringify(error)}</p>
    }
    if(loading){
        return <CategoryLoading/>
    }

    return(
      <>
        <Post
            error={error}
            loading={loading}
            data ={data}
            fetchMore={fetchMore}
            category={category}
        />
      </>
    );
};
export const CategoryPage = () => {
    
    
  return (
    <>
        <Helmet>
          <title>Rendez-Vous Magazine</title>
          <meta name="title" content="Rendez-Vous Magazine"/>
          <meta name="description" content="La Revista"/>

          <meta property="og:type" content="website"/>
          <meta property="og:url" content={`${process.env.REACT_APP_DOMAIN}`}/>
          <meta property="og:title" content="Rendez-Vous Magazine"/>
          <meta property="og:description" content="La Revista"/>
          <meta property="og:image" itemprop="image" content={RVLogo}/>

          <meta property='twitter:card' content='summary_large_image'/>
          <meta property="twitter:url" content={`${process.env.REACT_APP_DOMAIN}`}/>
          <meta property="twitter:title" content="Rendez-Vous Magazine"/>
          <meta property="twitter:description" content="La Revista"/>
          <meta property="twitter:image"  content={RVLogo}/>

        </Helmet>
        <Header/>
        <div key='category-content'>
            <PostContent/>
        </div>
        <Footer/>
    </>
  )
}
