import React, { Component } from "react";

export class NewsItems extends Component {

  render() {
    let { title, para, imageUrl, newsUrl } = this.props;
    return (
      <div>
        <div className="container my-5">
          <div className="row">
              <div className="col-md-4">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={imageUrl}
                  className="card-img-top"
                  alt="Image Not Found"
                />
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{para}</p>
                  <a href={newsUrl} target="-blank" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;
