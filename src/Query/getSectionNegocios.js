import gql from 'graphql-tag';

export const getSectionNegocios = gql`query getSectionNegocios {
  posts(first: 4, where: {categoryName: "Negocios"}) {
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