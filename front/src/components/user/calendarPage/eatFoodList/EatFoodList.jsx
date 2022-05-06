import React, { useState } from "react";
import {
  FoodListContainer,
  ListWrapper,
  IconWrapper,
  H5,
  TotalWrapper,
  Li,
  StyledAddIcon,
  StyledRemoveIcon,
} from "./EatFoodList.style";
import { post } from "../../../../api";
import { CalendarDeleteList } from "../../like/cardSection/calendarButtonSection/CalendarButtonComp";

const EatFoodList = ({
  title,
  type,
  foodList,
  totalCalrorie,
  setMealCalrorie,
  setFoodList,
}) => {
  return (
    <FoodListContainer>
      <h5>{title}</h5>
      <ol>
        {foodList?.map((f, index) => {
          return (
            <Li key={index}>
              <ListWrapper>
                <H5>{f.category}</H5>
                <IconWrapper>
                  <H5 style={{ marginRight: "0.5rem" }}>{f.volume}개</H5>
                  <StyledAddIcon
                    style={{ cursor: "pointer" }}
                    onClick={async () => {
                      try {
                        const res = await post("foods/calories", [
                          {
                            category: f.category,
                            volume: 1,
                          },
                        ]);
                        setMealCalrorie((current) => {
                          return current + res.data.calories;
                        });
                        const temp = [...foodList];
                        temp[index].volume += 1;
                        setFoodList([...temp]);
                      } catch (e) {
                        throw new Error(e);
                      }
                    }}
                  />
                  <StyledRemoveIcon
                    style={{ cursor: "pointer" }}
                    onClick={async () => {
                      try {
                        const res = await post("foods/calories", [
                          {
                            category: f.category,
                            volume: 1,
                          },
                        ]);
                        setMealCalrorie((current) => {
                          return current - res.data.calories;
                        });
                        const temp = [...foodList];
                        if (f.volume === 1) {
                          temp.splice(index, 1);
                          setFoodList([...temp]);
                          CalendarDeleteList(f.category);
                          return;
                        }
                        temp[index].volume -= 1;
                        setFoodList([...temp]);
                      } catch (e) {
                        throw new Error(e);
                      }
                    }}
                  />
                </IconWrapper>
              </ListWrapper>
            </Li>
          );
        })}
      </ol>
      <TotalWrapper>{totalCalrorie} kacl</TotalWrapper>
    </FoodListContainer>
  );
};

export default EatFoodList;
