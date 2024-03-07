import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Example = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulate loading delay with setTimeout
    const fetchData = () => {
      setTimeout(() => {
        // Here you can fetch data from an API or another source
        const newData = [
          { name: 'Oct 2022', uv: 15000, pv: 15000 },
          { name: 'Dec 2022', uv: 12000, pv: 14000 },
          { name: 'Feb 2023', uv: 14000, pv: 16000 },
          { name: 'Apr 2023', uv: 22000, pv: 14000 },
          { name: 'Jun 2023', uv: 14000, pv: 16000 },
          { name: 'Aug 2023', uv: 12000, pv: 13000 },
          { name: 'Oct 2023', uv: 14000, pv: 21000 },
          { name: 'Dec 2023', uv: 19000, pv: 35000 },
        ];

        setData(newData);
        setLoading(false);
      }, 1000);
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once

  if (loading) {
    // Render skeleton loading while data is loading
    return (
      <div className="skeleton-loading">
        {/* Render rectangular skeleton for each div */}
        <div style={{ width: '100%', height: "450px", backgroundColor: '#f0f0f0' }}></div>
      </div>
    );
  }

  // Define your custom ticks for the y-axis
  const customYTicks = [0, 20000, 40000];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data} // Display all data points
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis ticks={customYTicks} /> {/* Set custom ticks for y-axis */}
        <Tooltip />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeDasharray="5 5" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default Example;
