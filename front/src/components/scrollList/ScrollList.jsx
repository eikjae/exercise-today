import React, { useState } from "react";
import { List, ListWrapper, P } from "./ScrollList.style";

const ScrollList = ({ handleOnClick, scrollNames }) => {
  const [clickedNum, setClickedNum] = useState(0);

  const handleClickList = (num) => {
    return () => {
      handleOnClick(num);
      setClickedNum(num);
    };
  };
  return (
    <ListWrapper>
      <ul>
        {scrollNames.map((n, index) => {
          return (
            <List
              key={"scroll" + index}
              onClick={handleClickList(index)}
              className={clickedNum === index ? "clicked" : ""}
            >
              <P>{n}</P>
            </List>
          );
        })}
      </ul>
    </ListWrapper>
  );
};

export default ScrollList;
