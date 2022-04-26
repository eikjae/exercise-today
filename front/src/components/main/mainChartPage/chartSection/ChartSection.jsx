import BarChart from "../../../charts/BarChart";
import { StyledChartContainer } from "./ChartSection.style";

const ChartSection = ({ data }) => {
  return (
    <StyledChartContainer>
      <BarChart data={data} />
    </StyledChartContainer>
  );
};

export default ChartSection;
