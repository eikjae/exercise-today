import React, { Fragment } from "react";
import {
  FoodListContainer,
  ListWrapper,
  IconWrapper,
  H5,
  TotalWrapper,
  Li,
  StyledAddIcon,
  StyledRemoveIcon,
  Hr,
} from "./EatFoodList.style";
import { post } from "../../../../api";
import { CalendarDeleteList } from "../../like/cardSection/calendarButtonSection/CalendarButtonComp";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
      <Accordion
        defaultExpanded={true}
        style={{
          boxShadow:
            "box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <H5>{title}</H5>
        </AccordionSummary>
        <AccordionDetails>
          <ol>
            {foodList?.map((f, index) => {
              return (
                <Fragment key={("foodList_", index)}>
                  <Li>
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
                  <Hr />
                </Fragment>
              );
            })}
          </ol>
        </AccordionDetails>
      </Accordion>

      <TotalWrapper>총 {totalCalrorie} kacl</TotalWrapper>
    </FoodListContainer>
  );
};

export default EatFoodList;
