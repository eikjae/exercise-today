import React from "react";
import {
  FoodListContainer,
  ListWrapper,
  IconWrapper,
  H5,
  TotalWrapper,
} from "./EatFoodList.style";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { post } from "../../../../api";

const EatFoodList = ({
  title,
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
            <li key={index}>
              <ListWrapper>
                <H5>{f.food}</H5>
                <IconWrapper>
                  <H5 style={{ marginRight: "0.5rem" }}>{f.count}개</H5>
                  <AddIcon
                    style={{ cursor: "pointer" }}
                    onClick={async () => {
                      try {
                        const res = await post("foods/calories", [
                          {
                            category: f.food,
                            volume: 1,
                          },
                        ]);
                        setMealCalrorie((current) => {
                          return current + res.data.calories;
                        });
                        const temp = [...foodList];
                        temp[index].count += 1;
                        setFoodList([...temp]);
                      } catch (e) {
                        throw new Error(e);
                      }
                    }}
                  />
                  <RemoveIcon
                    style={{ cursor: "pointer" }}
                    onClick={async () => {
                      try {
                        const res = await post("foods/calories", [
                          {
                            category: f.food,
                            volume: 1,
                          },
                        ]);
                        setMealCalrorie((current) => {
                          return current - res.data.calories;
                        });
                        const temp = [...foodList];
                        if (f.count === 1) {
                          temp.splice(index, 1);
                          setFoodList([...temp]);
                          return;
                        }
                        temp[index].count -= 1;
                        setFoodList([...temp]);
                      } catch (e) {
                        throw new Error(e);
                      }
                    }}
                  />
                </IconWrapper>
              </ListWrapper>
            </li>
          );
        })}
      </ol>
      <TotalWrapper>총 칼로리: {totalCalrorie}</TotalWrapper>
    </FoodListContainer>
  );
};

export default EatFoodList;
