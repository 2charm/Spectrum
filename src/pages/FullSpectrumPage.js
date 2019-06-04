import React, {Component} from 'react';
import NewsItem from '../components/NewsItem.js'
import { css } from '@emotion/core';
import { BeatLoader } from 'react-spinners';
import '../App.css';

const override_load = css`
  position: fixed; /* or absolute */
  top: 50%;
  left: 50%;
`;

export class FullSpectrumPage extends Component {
    
    constructor(props){
        super(props);
        this.state= {
            article:this.props.articles[this.props.match.params.category][this.props.match.params.id],
            articles:[],
            isLoaded:false,
        }
    }
    componentDidMount() {
        let title = this.state.article['title']
        title = title.substring(0, title.lastIndexOf(" - "));
        let url = "https://api.spectrumnews.me/v1/spectrum/" + encodeURI(title);
        fetch(url, { 
            method: "GET", 
            headers: {
                "Content-Type": "text/plain"
            },
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data)
            this.setState({
                articles:data,
                isLoaded:true,
            })
        })
        .catch((err) => {
            console.log(err.message);
        })
    }
    
    render() {
        let article = this.props.articles[this.props.match.params.category][this.props.match.params.id];

        if(!this.state.isLoaded) {
            return (
              <div className='sweet-loading'>
              <BeatLoader
                css={override_load}
                sizeUnit={"px"}
                size={20}
                color={'#E08D4F'}
                loading={!this.state.isLoaded}
              />
            </div> 
            );
          }
        return (
            <div className='full-coverage'>
                <div className='container'>
                    <hr className='shortBar'/>
                    <h3 className='intro-title'>{this.state.article.title}</h3>
                </div>
                <div className='container'>
                    <img className="img-fluid logo-img" src={article.urlToImage} alt=""/>               
                </div>
                <div className='container'>
                <hr className='longBar'/>
                <h3>See related articles on the topic below</h3>
                    {
                        this.state.articles.map((article, i) => {
                            return (
                                <NewsItem {...article} title={article['title']} key={i} isFull={true}/>
                            )
                        })
                    }
                </div>

            </div>
        )
    }
}

export default FullSpectrumPage;
