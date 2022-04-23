import React from 'react';
import { BarChart as Barchart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';
const data = [
    {
      name: 'Page A',
      exercise: 4000,
    },
    {
      name: 'Page B',
      exercise: 3000,
    },
    {
      name: 'Page C',
      exercise: 2000,
    },
    {
      name: 'Page D',
      exercise: 2780,
    },
    {
      name: 'Page E',
      exercise: 1890,
    },
    {
      name: 'Page F',
      exercise: 2390,
    },
    {
      name: 'Page G',
      exercise: 3490,
    },
  ];
  
  const tickFormatter = (name) => {
      const limit = 8;      
      if(name && name.length < 10) return name;
      return name && `${name.substring(0, limit)}...`
  }

  const BarChart = ({data}) => {
      console.log(data);
      return (
        <ResponsiveContainer width="100%" height="100%">
          <Barchart
            width={500}
            height={300}
            data={data?.map(d => {
                const time = d.time.split('시간')
                const hour = Number(time[0]);
                let min = Number((Number(time[1].replace('분', '')) / 60).toFixed(2))
                console.log(hour);
                console.log(min);
                console.log(hour + min);
                return {
                    name: d.name,
                    hour: hour + min
                }
            })}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tickFormatter={tickFormatter} interval={0}/>
            <YAxis label={{value: 'hour', angle: -90, position: 'insideLeft'}}/>
            <Tooltip />
            <Legend />
            <Bar dataKey="hour" fill="#8884d8" barSize={40}>
                <LabelList dataKey="hour" position="top"></LabelList>
            </Bar>
          </Barchart>
        </ResponsiveContainer>
      );
    }

  export default BarChart