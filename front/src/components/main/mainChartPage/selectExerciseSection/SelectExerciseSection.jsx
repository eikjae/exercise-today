import { Switch } from "@mui/material";
import {
  StyledFormControlLabel,
  StyledFormControlLabelContainer,
  StyledSubTitle,
  StyledSwitchContainer,
  StyledSwitchLayout,
} from "./SelectExerciseSection.style";

const SelectExerciseSection = ({ selectSwitch, handleOnClick }) => {
  return (
    <StyledSwitchLayout>
      <StyledSubTitle>원하는 운동을 선택해주세요</StyledSubTitle>
      <StyledSwitchContainer>
        {selectSwitch?.map((s, index) => {
          return (
            <StyledFormControlLabelContainer key={s.id}>
              <StyledFormControlLabel
                control={
                  <Switch
                    color="secondary"
                    onClick={handleOnClick}
                    value={s.name}
                    id={String(index)}
                  ></Switch>
                }
                checked={s.isSelected === true}
                label={s.name}
              />
            </StyledFormControlLabelContainer>
          );
        })}
      </StyledSwitchContainer>
    </StyledSwitchLayout>
  );
};

export default SelectExerciseSection;
