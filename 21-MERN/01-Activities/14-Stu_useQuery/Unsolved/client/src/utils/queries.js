import { gql } from '@apollo/client';

export const QUERY_THOUGHTS = gql` query Thoughts{
  query Thoughts {
    thoughts {
      _id
      createdAt
      thoughtAuthor
      thoughtText
    }
  }
  `; 