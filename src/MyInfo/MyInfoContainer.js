import React from 'react';
import MyInfoName from "./MyInfoName";
import MyInfoMail from "./MyInfoMail";
import SubmitContainer from "./SubmitContainer";


const MyInfoContainer = () => {
  return (
      <div
        style={{
          width: '300px',
          border: '1px solid #222'
        }}
      >
        <MyInfoName />
        <MyInfoMail />
        <SubmitContainer />
      </div>
  );

};

export default MyInfoContainer;