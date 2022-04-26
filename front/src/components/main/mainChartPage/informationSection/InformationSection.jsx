import BaseChip from "../../../chips/BaseChip";
import { StyledInfoLayout } from "./InformationSection.style";

const InformationSection = ({ calorie, height, weight }) => {
  return (
    <StyledInfoLayout>
      <BaseChip title={"오늘 섭취한 칼로리"} content={`${calorie}kcal`} />
      <BaseChip title={"키"} content={`${height}cm`} />
      <BaseChip title={"몸무게"} content={`${weight}kg`} />
    </StyledInfoLayout>
  );
};

export default InformationSection;
