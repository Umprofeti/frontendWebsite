import gql from 'graphql-tag';

export const getPostsMarloports = gql`
  query getPostMarloports {
    posts(where: {categoryId: 6}, first: 1) {
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
          categories(where: {nameLike: "MARLOPORTS"}) {
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
