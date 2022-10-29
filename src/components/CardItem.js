import React, { Component } from 'react'

export class CardItem extends Component {
  
  render() {
    let {tittle, description, imageUrl, newsUrl } = this.props;
    return (
      <div>
        <div className="card" >
          <img className="card-img-top" src={!imageUrl?"https://images.indianexpress.com/2022/09/Hubble-spiral-galaxy-image-20220918.jpg":imageUrl } alt="..." />
          <div className="card-body">
            <h5 className="card-title">{tittle}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-primary">Read more</a>
          </div>
        </div>
      </div>
    )
  }
}
export default CardItem


