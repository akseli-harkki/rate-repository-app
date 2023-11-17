import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
query Repositories {
  repositories {
    edges {
      node {
        description
        forksCount
        fullName
        id
        language
        ownerAvatarUrl
        ratingAverage
        reviewCount
        stargazersCount
      }
    }
  }
}
`
export const CURRENT_USER = gql`
query Query {
  me {
    username
  }
}`

