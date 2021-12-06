import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($email: String!) {
    user(email: $email) {
      _id
      name
      email
      pic
      bio
    }
  }
`;

export const GET_SEARCH = gql`
  {
    venues{
   location_name
   address
   up_votes
   drink_names
   user_drinks
    }
  }

  
`;