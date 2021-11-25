import { useQuery, useMutation, useQueryClient } from "react-query";


const defaultOption = {
  cacheTime: 60 * 1000, // query instance가 inactive 된 후 garbage collecting 되기 전까지의 캐시 유지 시간
  staleTime: 60 * 1000, // data가 stale하다고 인식하게 될 때 까지의 시간 (default 0)
}

const fetchAllTodos = async () => {
  const result = await fetch('http://localhost:4000/todos');
  return await result.json();
};

const fetchAllUsers = async () => {
  const result = await fetch('http://localhost:4000/users');
  return await result.json();
};

const fetchUserById = async  (id) => {
  const result = await fetch(`http://localhost:4000/user/${id}`);
  return await result.json();
}

const useGetAllTodosQuery = () =>
  useQuery(
    ['todos'],
    fetchAllTodos,
    defaultOption,
  );

const useGetAllUsersQuery = () =>
  useQuery(
    ['users'],
    fetchAllUsers,
    defaultOption,
  );

const useGetUserInfoQuery = (id, opts = {}) =>
  useQuery(
    ['users', id],
    () => fetchUserById(id),
    {
      ...defaultOption,
      ...opts
    }
  );

const useSetUserInfoMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(newUserInfo => {
    return fetch(`http://localhost:4000/user/${newUserInfo.id}`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(newUserInfo)
    });
  }, {
    onSuccess: (data, variables) => {
      console.log(data, variables);
      queryClient.invalidateQueries('users');
    }
  })
};

export {
  useGetAllTodosQuery,
  useGetAllUsersQuery,
  useGetUserInfoQuery,
  useSetUserInfoMutation,
}