import React from 'react';
import { useRecoilState } from "recoil";
import {userInfoMail} from "./state";
import {useGetUserInfoQuery} from "../CustomQueries";

const MyInfoMail = () => {
  const [userMail, setUserMail] = useRecoilState(userInfoMail);
  const onQuerySuccessCallback = (data) => {
    setUserMail(data.mail);
  };
  const { isLoading, isError } = useGetUserInfoQuery(1, {onSuccess: onQuerySuccessCallback}); // 원래 같으면 로그인 세션 등에서 가져와야 하나 지금은 임의로 넣어줌.
  const onChangeHandler = (e) => {
    setUserMail(e.target.value);
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
      MAIL: <input type="text" value={userMail} onChange={onChangeHandler}/>
    </div>
  )
};

export default MyInfoMail;