import { useGetAllUsersQuery } from "../CustomQueries";
import User from './User';

const UserContainer = () => {
  const { isLoading, isError, data } = useGetAllUsersQuery();
  if (isLoading) return <h1>로-딩 중입니닷</h1>;
  if (isError) return <p>에러가 발생해부러쓰</p>;

  return (
    <div>
      {
        data.map((user) => {
          return <User key={user.id} user={user} />
        })
      }
    </div>
  );

};

export default UserContainer;