import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;


export const ADD_DATA=gql`
mutation addData($coinData:newCoin){
  addData(coinData:$coinData){
    name

  
  }
}

`

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      user {
 
        name
      
       
      }
    }
  }
`;

export const ADD_REVIEW = gql`
mutation Mutation($userid: ID!, $name: String!, $drink: ID!, $count: Int!) {
  addReview(userid: $userid, name: $name, drink: $drink, count: $count) {
    drinkName
  }
}
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;