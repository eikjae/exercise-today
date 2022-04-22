import React from 'react';
import { useParams } from 'react-router-dom';

const MainChartPage = (props) => {
    const {calorie, height, weight} = useParams();
    return <h1>{Number(calorie) + Number(height) + Number(weight)}</h1>
};

export default MainChartPage;