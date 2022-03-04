import gql from 'graphql-tag';

export const getSectionMarloports = gql`query getSectionMarloports {
    posts(first: 4, where: {categoryName: "Marloports"}) {
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