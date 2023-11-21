import { gql } from '@apollo/client'
import { REPO_DETAILS } from './fragments'

export const GET_REPOSITORIES = gql`
  query repositories(
    $first: Int,
    $after: String,
    $orderBy: AllRepositoriesOrderBy, 
    $orderDirection: OrderDirection, 
    $searchKeyword: String) {
    repositories(
      first: $first,
      after: $after,
      orderBy: $orderBy, 
      orderDirection: $orderDirection, 
      searchKeyword: $searchKeyword) {
      edges {
        node {
          ...RepoDetails
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
    }
  }
  ${REPO_DETAILS}
`

export const GET_SINGLE_REPOSITORY = gql`
  query repository($id: ID!, $first: Int, $after: String,) {
    repository(id: $id) {
      ...RepoDetails
      url
      reviews(first: $first, after: $after,) {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
      }
    }
  }
  ${REPO_DETAILS}
`

export const CURRENT_USER = gql`
  query  currentUser($includeReviews: Boolean = false) {
    me {
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            id
            text
            rating
            createdAt
            repository {
              ownerName
              name
              id
            }
          }
        }
      }
    }
  }  
`

