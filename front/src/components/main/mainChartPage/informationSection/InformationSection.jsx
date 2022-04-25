import { MainPageChip } from "../../../chips/StyledChip";
import { StyledInfoLayout } from "./InformationSection.style";

const InformationSection = ({ calorie, height, weight }) => {
  return (
    <StyledInfoLayout>
      <MainPageChip title={"오늘 섭취한 칼로리"} content={`${calorie}kcal`} />
      <MainPageChip title={"키"} content={`${height}cm`} />
      <MainPageChip title={"몸무게"} content={`${weight}kg`} />
    </StyledInfoLayout>
  );
};

export default InformationSection;
