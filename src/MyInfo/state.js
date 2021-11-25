import { atom, selector } from "recoil";

const userInfoName = atom({
  key: 'userInfoName',
  default: ''
});

const userInfoMail = atom({
  key: 'userInfoMail',
  default: ''
});

const combinedUserInfo = selector({
  key: 'combinedUserInfo',
  get: ({get}) => {
    const name = get(userInfoName);
    const mail = get(userInfoMail);

    return {
      id: 1,
      name,
      mail
    }
  }
})

export {
  userInfoName,
  userInfoMail,
  combinedUserInfo,
}