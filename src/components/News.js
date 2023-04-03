import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "../Spinner";

export class News extends Component {
  // articles = [
  //   {
  //     source: {
  //       id: "espn-cric-info",
  //       name: "ESPN Cric Info",
  //     },
  //     author: null,
  //     id: 1,
  //     title:
  //       "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
  //     description:
  //       "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
  //     url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
  //     urlToImage:
  //       "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
  //     publishedAt: "2020-04-27T11:41:47Z",
  //     content:
  //       "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
  //   },
  //   {
  //     source: {
  //       id: "espn-cric-info",
  //       name: "ESPN Cric Info",
  //     },
  //     id: 2,
  //     author: null,
  //     title:
  //       "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
  //     description:
  //       "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
  //     url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
  //     urlToImage:
  //       "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
  //     publishedAt: "2020-03-30T15:26:05Z",
  //     content:
  //       "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
  //   },
  //   {
  //     source: {
  //       id: "espn-cric-info",
  //       name: "ESPN Cric Info",
  //     },
  //     id: 3,
  //     author: null,
  //     title:
  //       "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
  //     description:
  //       "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
  //     url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
  //     urlToImage:
  //       "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
  //     publishedAt: "2020-03-30T15:26:05Z",
  //     content:
  //       "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
  //   },
  // ];

  // for set state
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      loading: false
    };
  }

  // this function same as mount function
  // we change the above state
  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=0720d167be5245ecb36675509feffe59&page=1&pageSize=${this.props.pageSize}`;

      this.setState({loading: true})
      let data = await fetch(url);
      let parseData = await data.json();
    this.setState({ 
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false
     });
  }

  nextPage = async () => {
    console.log('next')
      let url =
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=0720d167be5245ecb36675509feffe59&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      
    let data = await fetch(url);
    this.setState({loading: true})
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      page: this.state.page + 1,
      articles: parseData.articles,
      loading: false
    });  
  }

  prevPage = async () => {
    console.log('prev')
    let url =
    `https://newsapi.org/v2/top-headlines?country=in&apiKey=0720d167be5245ecb36675509feffe59&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;

  let data = await fetch(url);
  this.setState({loading: true})
  let parseData = await data.json();
  console.log(parseData);
  this.setState({
    page: this.state.page - 1,
    articles: parseData.articles,
    loading: false
  });
  }

  render() {
    return (
      <div>
        <div className="container">
          <h3 className="text-center">Top Headlines</h3>
          {/* if loading is true */}
         {this.state.loading === true ? <Spinner /> : ""}
          <div className="row">
            {this.state.articles.map((elements) => {
              return (
                <div className="col-lg-4 col-md-6 col-12" key={elements.url}>
                  <NewsItems
                    title={elements.title}
                    para={
                      elements.description === null
                      // for null description
                        ? "It is a known fact that India is a country with high taxes. Some of the items that are inexpensive in other countries is often very expensive in India." 
                        : elements.description
                    }
                    imageUrl={
                      elements.urlToImage === null
                      // for null image
                        ? "https://www.cartoq.com/wp-content/uploads/2023/03/dubai-india-car-prices-fb.jpg"
                        : elements.urlToImage
                    }
                    newsUrl={elements.url}
                  />
                </div>
              );
            })}
          </div>
          
        </div>
        <div className="container my-4 d-flex justify-content-between">
            <div className={`btn btn-dark ${this.state.page <=1 ? "disabled" : " "}`} onClick={this.prevPage}>Previous</div>
            <div className={`btn btn-dark ${this.state.page + 1 > (Math.ceil(this.state.totalResults/this.props.pageSize)) ? 'disabled' : ''}`} onClick={this.nextPage}>Next</div>
          </div>
      </div>
    );
  }
}

export default News;
