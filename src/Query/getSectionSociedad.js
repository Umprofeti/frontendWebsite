import gql from 'graphql-tag';

export const getSectionSociedad = gql`query getSectionSociedad {
    posts(where: {categoryId: 16}, first: 8) {
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
          categories(where: {nameLike: "SOCIEDAD"}) {
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