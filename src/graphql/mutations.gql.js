import { gql } from '@apollo/client';

export const ADD_TODO = gql`
  mutation addTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`;

export const UPDATE_TODO = gql`
  mutation updateTodo($id: String!, $type: String!) {
    updateTodo(type: $type, id: $id) {
      id
      type
    }
  }
`;