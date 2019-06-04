import React, {Component} from 'react';
import news from '../img/newspaper.png';
import {
    Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, PieChart, Pie, Cell, RadialBarChart, RadialBar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';

export class UserPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        scores: {}
      }
    }
    componentDidMount() {
      let url = "https://api.spectrumnews.me/v1/metrics";
      let bearer = sessionStorage.getItem("sessionID");

      fetch(url, {
        methods:"GET",
        headers: {
          "Content-Type": "text/plain",
          "Authorization":bearer
        }
      })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          scores:data['categoryToNumArticles']
        });
      })
      .catch((err) => {
        console.log(err.message);
      })
    }

    render() {
        let data = [
            {
              subject: 'Sports', A: this.state.scores['sports'], fullMark: 20,
            },
            {
              subject: 'Health', A: this.state.scores['health'], fullMark: 20,
            },
            {
              subject: 'Business', A: this.state.scores['business'], fullMark: 20,
            },
            {
              subject: 'Entertainment', A: this.state.scores['entertainment'], fullMark: 20,
            },
            {
              subject: 'Science', A: this.state.scores['science'], fullMark: 20,
            },
            {
              subject: 'Tech', A: this.state.scores['technology'], fullMark: 20,
            },
          ];

        const data2 = [
            { name: 'Sports', value: this.state.scores['sports'] },
            { name: 'Health', value: this.state.scores['health'] },
            { name: 'Business', value: this.state.scores['business'] },
            { name: 'Entertainment', value: this.state.scores['entertainment'] },
            { name: 'Science', value: this.state.scores['science'] },
            { name: 'Tech', value: this.state.scores['technology'] },
        ];

        const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

        const data3 = [
            {
              name: 'Sports', uv: this.state.scores['sports'] , fill: '#8884d8',
            },
            {
              name: 'Health', uv: this.state.scores['health'] , fill: '#83a6ed',
            },
            {
              name: 'Business', uv: this.state.scores['business'] , fill: '#8dd1e1',
            },
            {
              name: 'Entertainment', uv: this.state.scores['entertainment'] , fill: '#82ca9d',
            },
            {
              name: 'Science', uv: this.state.scores['science'] , fill: '#d0ed57',
            },
            {
              name: 'Tech', uv: this.state.scores['technology'] , fill: '#ffc658',
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
             <div className="row user-intro">
              <h3>{"Hi, " + sessionStorage.getItem('username') + "! Here are some of your reading habits for the last week."}</h3>
             </div>
             <hr className="shortBar"/>
             <div className="row">
              <div className="col-md-9">
                <div className="shadow-sm card" id="card-graphs">
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
                <div className="shadow-sm card" id="card-graphs">
                  <div className="card-body">
                    <h5 className="card-title">Top News Sources</h5>
                    <ul className="list-group">
                      <li className="list-group-item">CNN</li>
                      <li className="list-group-item">CNBC</li>
                      <li className="list-group-item">ESPN</li>
                      <li className="list-group-item">Tech Crunch</li>
                      <li className="list-group-item">Politico</li>
                      <li className="list-group-item">FOX</li>
                    </ul>
                  </div>
                </div>
              </div>
             </div>
             <div className="row">
                <div className="col-md-4">
                    <div className="shadow-sm card" id="card-graphs">
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
                    <div className="shadow-sm card" id="card-graphs">
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
                    <div className="shadow-sm card" id="card-graphs">
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
