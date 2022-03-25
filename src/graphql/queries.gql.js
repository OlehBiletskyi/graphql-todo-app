import { gql } from '@apollo/client';

export const GET_TODOS = gql`
  query getTodos {
    todos {
      id
      type
    }
  }
`;

export const GET_TODO = gql`
  query getTodo($id: String!) {
    todos(id: $id){
       id
      type
    }
  }
`;