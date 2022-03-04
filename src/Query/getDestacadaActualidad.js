import gql from 'graphql-tag';

export const  getDescatadaActualidad = gql`
query getDestacdaActualidad {
    tags(where: {nameLike: "actualidad-destacada"}) {
      edges {
        node {
          posts(first: 1) {
            edges {
              node {
                title
                excerpt
                date
                featuredImage {
                  node {
                    mediaItemUrl
                    title
                  }
                }
                author {
                  node {
                    name
                  }
                }
                id
                slug
              }
            }
          }
        }
      }
    }
  }`;