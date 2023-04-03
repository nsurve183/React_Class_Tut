import React, { Component } from 'react'
import NewsItems from '../NewsItems';

export default class AddPreviousAndNext extends Component {
  constructor(){
    super();
    this.state = {
      articles: []
    }
  }


  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=0720d167be5245ecb36675509feffe59&page=1`;

    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ articles: parseData.articles });
  }

  prevBtn = async () => {
    console.log('prev')
    let url =
    `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=0720d167be5245ecb36675509feffe59&page=${this.state.page - 1}`;

  let data = await fetch(url);
  let parseData = await data.json();
  this.setState({
    page: this.state.page,
    articles: parseData.articles 
});
    
  }

  nextBtn = async () => {
    console.log('next')
    let url =
    `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=0720d167be5245ecb36675509feffe59&page=${this.state.page + 1}`;
  let data = await fetch(url);
  let parseData = await data.json();
  this.setState({
    page: this.state.page,
    articles: parseData.articles
});
  }
 

  render() {
    return (
        
      <div>
        <div className="container my-5">
          <h3 className="text-center">Top Headlines About Cricket</h3>
          <div className="row">
            {this.state.articles.map((elements) => {
              return (
                <div className="col-lg-4 col-md-6 col-12" key={elements.url}>
                  <NewsItems
                    title={elements.title}
                    para={!elements.description ? "A top U.S. regulator told a Senate panel on Tuesday (March 28) that Silicon Valley Bank executives did a  job of managing risk before the lender co..." : elements.description}
                    imageUrl={!elements.urlToImage ? "https://img.etimg.com/thumb/msid-99105968,width-1070,height-580,imgsize-121144,overlay-ettech/photo.jpg" : elements.urlToImage}
                    newsUrl={elements.url}
                  />
                </div>
              );
            })}
          </div>
          <div className="row d-flex justify-content-between mt-4">
                <div className= 'btn btn-primary mb-4' onClick={this.prevBtn} >Previous</div>
                <div className="btn btn-dark"  onClick={this.nextBtn}>Next</div>
          </div>
        </div>
      </div>
      
    );
  }
}

