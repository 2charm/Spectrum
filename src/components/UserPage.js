import React, {Component} from 'react';
import {
    Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, PieChart, Pie, Cell, RadialBarChart, RadialBar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
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

          const data4 = [
            {
              name: 'Week 1', business: 15, sports: 20, health:5, entertainment:9, science:1, technology:5,
            },
            {
              name: 'Week 2', business: 12, sports: 11, health:2, entertainment:19, science:5, technology:10,
            },
            {
              name: 'Week 3', business: 6, sports: 2, health:11, entertainment:13, science:11, technology:14,
            },
            {
              name: 'Week 4', business: 13, sports: 12, health:4, entertainment:6, science:8, technology:11,
            },
            {
              name: 'Week 5',business: 9, sports: 7, health:9, entertainment:3, science:10, technology:2,
            },
            {
              name: 'Week 6', business: 10, sports: 9, health:11, entertainment:7, science:7, technology:8,
            },
            {
              name: 'Week 7', business: 8, sports: 11, health:14, entertainment:10, science:4, technology:12,
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
                                <h5 className="card-title">{sessionStorage.getItem('username') + "'s Profile"}</h5>
                                <p className="card-text">This will be a short summary of the user's general usage of Spectrum news and how much news they are reading from each category.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
             <hr className="shortBar"/>
             <div className="row">
              <div className="col-md-9">
                <div className="card" id="card-graphs">
                  <div className="card-body">
                    <h5 className="card-title">Weekly Category Trends</h5>
                    <LineChart
                      width={800}
                      height={300}
                      data={data4}
                      margin={{
                        top: 5, right: 40, left: 10, bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="business" stroke="#8884d8" activeDot={{ r: 8 }} />
                      <Line type="monotone" dataKey="sports" stroke="#82ca9d" />
                      <Line type="monotone" dataKey="health" stroke="#00FF00" />
                      <Line type="monotone" dataKey="entertainment" stroke="#00FFFF" />
                      <Line type="monotone" dataKey="science" stroke="#008080" />
                      <Line type="monotone" dataKey="technology" stroke="#FF5733" />
                    </LineChart>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card" id="card-graphs">
                  <div className="card-body">
                    <h5 className="card-title">Top News Categories</h5>
                    <ul className="list-group">
                      <li className="list-group-item">Health</li>
                      <li className="list-group-item">Technology</li>
                      <li className="list-group-item">Sports</li>
                      <li className="list-group-item">Entertainment</li>
                      <li className="list-group-item">Business</li>
                      <li className="list-group-item">Science</li>
                    </ul>
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
             <hr className="longBar"/>
             {/* <h3> Suggested Articles: </h3> */}
           </div>
        );
    }
}

export default UserPage;
