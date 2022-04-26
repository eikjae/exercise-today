import { StyledMainPageChip } from "../../../chips/StyledChip";
import { StyledInfoLayout } from "./InformationSection.style";

const InformationSection = ({ calorie, height, weight }) => {
  return (
    <StyledInfoLayout>
      <StyledMainPageChip
        title={"오늘 섭취한 칼로리"}
        content={`${calorie}kcal`}
      />
      <StyledMainPageChip title={"키"} content={`${height}cm`} />
      <StyledMainPageChip title={"몸무게"} content={`${weight}kg`} />
    </StyledInfoLayout>
  );
};

export default InformationSection;
