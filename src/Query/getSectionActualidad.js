import gql from 'graphql-tag';


export const getSectionActualidad = gql`query getPostsActualidad {
    posts(first: 4, where: {categoryName: "Actualidad"}) {
      edges {
        node {
          title
          author {
            node {
              name
            }
          }
          featuredImage {
            node {
              mediaItemUrl
              title
            }
          }
          id
          slug
        }
      }
    }
  }`;