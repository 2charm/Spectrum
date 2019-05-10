import React, {Component} from 'react';
import {
    Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, PieChart, Pie, Cell, RadialBarChart, RadialBar,
  } from 'recharts';

export class UserPage extends Component {
    render() {
        let data = [
            {
              subject: 'Sports', A: 120, B: 110, fullMark: 150,
            },
            {
              subject: 'Health', A: 98, B: 130, fullMark: 150,
            },
            {
              subject: 'Business', A: 86, B: 130, fullMark: 150,
            },
            {
              subject: 'Entertainment', A: 99, B: 100, fullMark: 150,
            },
            {
              subject: 'Science', A: 85, B: 90, fullMark: 150,
            },
            {
              subject: 'Tech', A: 65, B: 85, fullMark: 150,
            },
          ];

        const data2 = [
            { name: 'Group A', value: 400 },
            { name: 'Group B', value: 300 },
            { name: 'Group C', value: 300 },
            { name: 'Group D', value: 200 },
        ];

        const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

        const data3 = [
            {
              name: '18-24', uv: 31.47, pv: 2400, fill: '#8884d8',
            },
            {
              name: '25-29', uv: 26.69, pv: 4567, fill: '#83a6ed',
            },
            {
              name: '30-34', uv: 15.69, pv: 1398, fill: '#8dd1e1',
            },
            {
              name: '35-39', uv: 8.22, pv: 9800, fill: '#82ca9d',
            },
            {
              name: '40-49', uv: 8.63, pv: 3908, fill: '#a4de6c',
            },
            {
              name: '50+', uv: 2.63, pv: 4800, fill: '#d0ed57',
            },
            {
              name: 'unknow', uv: 6.67, pv: 4800, fill: '#ffc658',
            },
          ];
        
        return (
           <div className="container">
             <div className="row">
                <div className="card mb-3" id="user-card">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img" alt="stock person"/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Blank's Profile</h5>
                                <p className="card-text">This will be a short summary of the user's general usage of Spectrum news and how much news they are reading from each category.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
             <div className="row">
                <div className="col-md-4">
                    <div className="card" id="card-graphs">
                        <div className="card-body">
                            <h5 className="card-title">Category Radar</h5>
                            {<RadarChart width={310} height={210} data={data}>
                                <PolarGrid />
                                <PolarAngleAxis dataKey="subject" />
                                <PolarRadiusAxis />
                                <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                            </RadarChart>
                            }
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card" id="card-graphs">
                        <div className="card-body">
                            <h5 className="card-title">Category Proportion</h5>
                            {<PieChart width={310} height={210} onMouseEnter={this.onPieEnter}>
                                <Pie
                                data={data2}
                                innerRadius={60}
                                outerRadius={80}
                                fill="#8884d8"
                                paddingAngle={5}
                                dataKey="value"
                                >
                                {
                                    data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                                }
                                </Pie>
                            </PieChart>
                            }
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card" id="card-graphs">
                        <div className="card-body">
                            <h5 className="card-title">Num Articles Per Category</h5>
                            {<RadialBarChart width={310} height={210} innerRadius={20} outerRadius={100} barSize={10} data={data3}>
                                <RadialBar minAngle={15} label={{ position: 'insideStart', fill: '#fff' }} background clockWise dataKey="uv" />
                            </RadialBarChart>
                            }
                        </div>
                    </div>
                </div>
             </div>
           </div>
        );
    }
}

export default UserPage;
