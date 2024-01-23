// import React, { PureComponent } from 'react';

import { Link, useLoaderData } from 'react-router-dom';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';


const Statistics = () => {
    const data = useLoaderData();

    return (
        <div>
            <div className='flex flex-col h-screen items-center justify-center'>
                <div>
                    <h1>Graph</h1>
                </div>
                <ResponsiveContainer width={"100%"} height={300}>
                    <AreaChart
                        data={data}
                        margin={{
                            top: 50,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <XAxis dataKey="assignmentNo" />
                        <YAxis />
                        <Area type='monotone' dataKey='score' />
                    </AreaChart>
                </ResponsiveContainer>
                <div className='mt-10'>
                    <Link to='/'>
                        <button className='btn px-6 py-3 rounded-md text-white font-medium'>Homepage</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Statistics;