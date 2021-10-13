/* eslint-disable prettier/prettier */
import React from 'react';
import {
    CartesianGrid, Legend, Line, LineChart, ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from 'recharts';



function Charts({title, data, dataKey, }) {
    
    return (
        <div className="charts">
            <div className="charts__content">
                <h3 className="charts__title heading__tertiary">{title}</h3>

                <ResponsiveContainer width="100%" height="100%" aspect={4/1}>
                    <LineChart
                        
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey={dataKey} />
                        <YAxis />
                        <Tooltip />
                        <Legend/>
                        <Line type="monotone" dataKey="Active User" stroke="#8d7cfb" activeDot={{ r: 8 }} />

                        <Line type="monotone" dataKey="Sales" stroke="#f65365" activeDot={{ r: 8 }} />
                       
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
export default Charts;

