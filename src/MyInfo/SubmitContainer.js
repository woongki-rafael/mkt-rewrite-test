import { useState, useEffect } from "react";
import {useSetUserInfoMutation} from "../CustomQueries";
import {useRecoilValue} from "recoil";
import {combinedUserInfo} from "./state";

const SubmitInstance = ({setInstance}) => {
  const mutateSuccessCallback = () => {
    setInstance(false);
  }
  const { mutate } = useSetUserInfoMutation({
    customFn: mutateSuccessCallback
  });
  const userInfo = useRecoilValue(combinedUserInfo);
  useEffect(() => {
    mutate(userInfo);
  },[]);

  return <div>저장중입니다.</div>
};

const SubmitContainer = () => {
  const [instanceState, setInstance] = useState(false);
  const onClickHandler = () => {
    setInstance(true);
  };
  return (
    <div>
      <button
        type="submit"
        onClick={onClickHandler}
      >
        저장은 무슨 저장
      </button>
      { instanceState && <SubmitInstance setInstance={setInstance}/> }
    </div>
  )
};

export default SubmitContainer;