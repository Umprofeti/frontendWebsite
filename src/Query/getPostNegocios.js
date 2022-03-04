import gql from 'graphql-tag';

export const getPostNegocios = gql`
  query getPostNegocios {
    posts(where: {categoryId: 11}, first: 1) {
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
          categories(where: {nameLike: "NEGOCIOS"}) {
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