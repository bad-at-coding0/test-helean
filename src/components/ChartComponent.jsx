import React from 'react'
import { BarChart, Bar, XAxis, Tooltip, Legend } from 'recharts'

const ChartComponent = ({ title, data }) => {
        return (
            <div style={{flexDirection:"column"}}>
                <h2 style={{fontFamily:"monospace"}}>{title}</h2>
                <BarChart
                    lab
                    width={1000}
                    height={600}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <XAxis dataKey="hour" />
                    <Tooltip cursor={false} />
                    <Legend />
                    <Bar dataKey="value" fill="#006262" />
                </BarChart>
            </div>
        )

}

export default ChartComponent