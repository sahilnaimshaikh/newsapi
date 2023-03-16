import React, { Component } from 'react';

export default class NewsItems extends Component {
  render() {
    let { imgUrl, title, description, url, author, date, source } = this.props
    return (
      <>
        <div className="card my-3">
        <a href={url} target="_blank" style={{textDecoration : 'none',color: 'black'}} >
          <img src={!imgUrl ? "https://media.istockphoto.com/photos/breaking-news-world-news-with-map-backgorund-picture-id1182477852?k=20&m=1182477852&s=612x612&w=0&h=I3wdSzT_5h1y9dHq_YpZ9AqdIKg8epthr8Guva8FkPA=" : imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <span className=" badge rounded-pill bg-dark text-center">{source}</span>
            <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} at {new Date(date).toGMTString()}</small></p>
            <p className="card-text">{description}</p>
          </div>
          </a>
        </div>
      </>
    );
  }
}

