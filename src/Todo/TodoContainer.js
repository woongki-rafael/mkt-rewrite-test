import Todo from './Todo';
import { useGetAllTodosQuery } from "../CustomQueries";

const TodoContainer = () => {
  const { isLoading, isError, data } = useGetAllTodosQuery();
  if (isLoading) return <h1>로-딩 중입니닷</h1>;
  if (isError) return <p>에러가 발생해부러쓰</p>;

  return (
    <div>
      {
        data.map((todo) => {
          return <Todo key={todo.id} todo={todo} />
        })
      }
    </div>
  );

};

export default TodoContainer;