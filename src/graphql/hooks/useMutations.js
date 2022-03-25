import { useMutation } from '@apollo/client';
import * as MUTATIONS from "../mutations.gql";

export const useAddTodo = (options) => {
  return useMutation(MUTATIONS.ADD_TODO, {...options});
};

export const useUpdateTodo = (options) => {
  return useMutation(MUTATIONS.UPDATE_TODO, {...options})
}