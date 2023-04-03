import React, { Component } from "react";
import NewsItems from "../NewsItems";
import Spinner from "../../Spinner";
import PropTypes from "prop-types";

export class ReduceCode extends Component {
  // define props
  static defaultProps = {
    PageSize: 6,
    Country: "in",
    Category: "general",
  };

  static propTypes = {
    PageSize: PropTypes.number.isRequired,
    Country: PropTypes.string.isRequired,
    Category: PropTypes.string.isRequired,
  };


  //for capitalize first character of the title
capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      loading: false,
    };
    document.title = `News - ${this.capitalize(this.props.Category)}`
  }



  async updateFun() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.Country}&category=${this.props.Category}&apiKey=0720d167be5245ecb36675509feffe59&page=${this.state.page}&pageSize=${this.props.PageSize}`;

    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.updateFun();
  }

  nextPage = () => {
    this.setState({ page: this.state.page + 1 });
    this.updateFun();
  };

  prevPage = () => {
    this.setState({ page: this.state.page - 1 });
    this.updateFun();
  };

  render() {
    return (
      <div>
        <div className="container">
          <h3 className="text-center mt-4 mb-0 text-capitalize">
          News Report - Top Headline From {this.capitalize(this.props.Category)}
          </h3>
          {/* if loading is true */}
          {this.state.loading === true ? <Spinner /> : ""}
          <div className="row">
            {this.state.articles.map((elements) => {
              return (
                <div className="col-md-4" key={elements.url}>
                  <NewsItems
                    title={elements.title}
                    para={
                      elements.description === null
                        ? // for null description
                          "It is a known fact that India is a country with high taxes. Some of the items that are inexpensive in other countries is often very expensive in India.taxes. Some of the items that are inexpensive in other countries is often very expensive in India"
                        : elements.description
                    }
                    imageUrl={
                      elements.urlToImage === null
                        ? // for null image
                          "https://www.cartoq.com/wp-content/uploads/2023/03/dubai-india-car-prices-fb.jpg"
                        : elements.urlToImage
                    }
                    newsUrl={elements.url}
                    author={elements.author}
                    date={elements.publishedAt}
                    source={elements.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="container my-4 d-flex justify-content-between">
          <div
            className={`btn btn-dark ${
              this.state.page <= 1 ? "disabled" : " "
            }`}
            onClick={this.prevPage}
          >
            Previous
          </div>
          <div
            className={`btn btn-dark ${
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
                ? "disabled"
                : ""
            }`}
            onClick={this.nextPage}
          >
            Next
          </div>
        </div>
      </div>
    );
  }
}

export default ReduceCode;
