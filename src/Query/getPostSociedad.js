import gql from 'graphql-tag';

export const getPostSociedad = gql`
  query getPostSociedad {
    posts(where: {categoryId: 16}, first: 1) {
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
          categories(where: {nameLike: "Sociedad"}) {
            edges {
              node {
                name
              }
            }
          }
        }
      }
    }
  }
  `;