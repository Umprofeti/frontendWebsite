import gql from 'graphql-tag';

export const  getDescatadaNegocios = gql`
query getDestacdaNegocios {
  tags(where: {nameLike: "negocios-destacada"}) {
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