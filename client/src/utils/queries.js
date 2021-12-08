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
 query venue($location_name:String!) {
    venue(location_name:$location_name){
      location_name
      address
      drink_names
      user_drinks{
        name
      }
   
   
    }
  }

  
`;
export const GET_DRINK = gql`
query drink($drinkName: String!) {
  drink(drinkName: $drinkName) {
    drinkName
    venue
    date
  }
}
`;