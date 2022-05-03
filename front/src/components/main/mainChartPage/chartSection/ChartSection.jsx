import BarChart from "../../../charts/BarChart";
import { StyledChartContainer } from "./ChartSection.style";

const ChartSection = ({ data, colors }) => {
  return (
    <StyledChartContainer>
      <BarChart data={data} colors={colors} />
    </StyledChartContainer>
  );
};

export default ChartSection;
