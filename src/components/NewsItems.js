import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    let { title, para, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-4">
              <div className="card" style={{ width: "20rem" }}>
                <img src={imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">
                    {title}
                  </h5>
                  <p className="card-text">{para}</p>
                  <p className="card-text">
                    <small>
                      Publish By: {!author ? "Unknown" : author} at{" "}
                      {new Date(date).toGMTString()}
                    </small>
                  </p>
                  <a
                    href={newsUrl}
                    target="-blank"
                    className="btn btn-primary btn-sm"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItems;
