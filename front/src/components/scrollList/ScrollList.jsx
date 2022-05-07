import React, { useState } from "react";
import { List, ListWrapper, P } from "./ScrollList.style";

const ScrollList = ({ handleOnClick, scrollNames, curIndex }) => {
  const handleClickList = (num) => {
    return () => {
      handleOnClick(num);
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
              className={curIndex === index ? "clicked" : ""}
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
