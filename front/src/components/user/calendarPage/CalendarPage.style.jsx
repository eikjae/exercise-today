import styled from "styled-components";

export const CalendarLayout = styled.div`
  display: flex;

  width: 80vw;
  min-width: 1400px;
  margin: auto;
  border: 1px solid green;
`;

export const CalendarBodyLayout = styled.div`
  flex: 0.3;
  display: flex;
  flex-direction: column;

  margin: 3rem 1rem 0 1rem;
  padding: 1rem;

  border: 1px solid blue;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex: 0.1;

  border: 1px solid pink;
  border-radius: 10px;
`;

export const BodyWrapper = styled.section`
  flex: 0.9;
  display: flex;
  flex-direction: column;

  border: 1px solid green;
  border-radius: 10px;

  margin-top: 1rem;

  padding: 1rem;
`;

export const TodayChecked = styled.article`
  display: flex;
  border: 1px solid pink;
  flex: 0.1;
`;

export const TodayWeight = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
