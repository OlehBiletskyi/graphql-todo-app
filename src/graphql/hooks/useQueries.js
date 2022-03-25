import { useQuery, useLazyQuery } from '@apollo/client';
import * as QUERIES from "../queries.gql";

export const useGetTodos = (options) => {
  return useQuery(QUERIES.GET_TODOS, {...options});
};

export const useGetTodo = (options) => {
  return useLazyQuery(QUERIES.GET_TODO, {...options});
};