import React, { useState } from "react";
import { List, P } from "./ScrollList.style";

const ScrollList = ({ handleOnClick }) => {
  const [clickedNum, setClickedNum] = useState(0);

  const handleClickList = (num) => {
    return () => {
      handleOnClick(num);
      setClickedNum(num);
    };
  };
  return (
    <ul>
      <List
        onClick={handleClickList(0)}
        className={clickedNum === 0 ? "clicked" : ""}
      >
        <P>행복과 건강</P>
      </List>
      <List
        onClick={handleClickList(1)}
        className={clickedNum === 1 ? "clicked" : ""}
      >
        <P>당뇨와 운동</P>
      </List>
      <List
        onClick={handleClickList(2)}
        className={clickedNum === 2 ? "clicked" : ""}
      >
        <P>체중별 심장병</P>
      </List>
      <List
        onClick={handleClickList(3)}
        className={clickedNum === 3 ? "clicked" : ""}
      >
        <P>데이터</P>
      </List>
    </ul>
  );
};

export default ScrollList;
