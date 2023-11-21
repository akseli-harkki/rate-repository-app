import { gql } from '@apollo/client'

export const REPO_DETAILS = gql`
  fragment RepoDetails on Repository {
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
`