import gql from 'graphql-tag';

export const getPostActualidad = gql`query getPostActualidad {
    posts(where: {categoryId: 10}, first: 1) {
      edges {
        node {
          id
          slug
          title
          date
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
          categories(where: {nameLike: "ACTUALIDAD"}) {
            edges {
              node {
                name
              }
            }
          }
        }
      }
    }
  }`;