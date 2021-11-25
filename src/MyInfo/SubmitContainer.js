import {useSetUserInfoMutation} from "../CustomQueries";
import {useRecoilValue} from "recoil";
import {combinedUserInfo} from "./state";


const SubmitContainer = () => {
  const { mutate } = useSetUserInfoMutation();
  const userInfo = useRecoilValue(combinedUserInfo);
  const onClickHandler = () => {
    mutate(userInfo);
  };
  return (
    <div>
      <button
        type="submit"
        onClick={onClickHandler}
      >
        저장은 무슨 저장
      </button>
    </div>
  )
};

export default SubmitContainer;