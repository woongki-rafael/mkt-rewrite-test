import React from 'react';
import { useRecoilState } from "recoil";
import { userInfoName } from "./state";
import {useGetUserInfoQuery} from "../CustomQueries";

const MyInfoName = () => {
  const [userName, setUserName] = useRecoilState(userInfoName);
  const onQuerySuccessCallback = (data) => {
    setUserName(data.name);
  };
  const { isLoading, isError } = useGetUserInfoQuery(1, {onSuccess: onQuerySuccessCallback}); // 원래 같으면 로그인 세션 등에서 가져와야 하나 지금은 임의로 넣어줌.
  const onChangeHandler = (e) => {
    setUserName(e.target.value);
  }

  return (
    <div
      style={{
        border: '1px solid #999',
        borderRadius: '5px',
        padding: '10px 15px',
        margin: '10px'
      }}
    >
      NAME: <input type="text" value={userName} onChange={onChangeHandler}/>
    </div>
  )
};

export default MyInfoName;