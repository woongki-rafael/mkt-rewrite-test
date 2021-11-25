import { useState } from 'react';
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { RecoilRoot } from "recoil";
import TodoContainer from "./Todo/TodoContainer";
import UserContainer from "./User/UserContainer";
import MyInfoContainer from "./MyInfo/MyInfoContainer";

const queryClient = new QueryClient();

function App() {
  const [page, changePage] = useState('main');

  const handleNavBtnClick = (nextPage) => {
    changePage(nextPage);
  }

  return (

    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <div className="App">
          <nav>
            <ul>
              <li><button onClick={() => handleNavBtnClick('main')}>main</button></li>
              <li><button onClick={() => handleNavBtnClick('todos')}>todos</button></li>
              <li><button onClick={() => handleNavBtnClick('users')}>All users</button></li>
              <li><button onClick={() => handleNavBtnClick('myInfo')}>My Info</button></li>
            </ul>
          </nav>
          { page === 'main' && <div><h1>여기는 공허한 메인 페이지</h1></div> }
          { page === 'todos' && <TodoContainer /> }
          { page === 'users' && <UserContainer /> }
          { page === 'myInfo' && <MyInfoContainer /> }
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </RecoilRoot>
    </QueryClientProvider>

  );
}

export default App;
