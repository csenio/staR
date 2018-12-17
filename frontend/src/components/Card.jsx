import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="card">
        <div className="card__profile">
          <img
            className="card__profile__picture"
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            alt=""
          />
          <div className="card__profile__text">
            <h3 className="card__profile__title">just a title</h3>
            <p className="card__profile__name">Max Musterman</p>
          </div>
        </div>
        <div className="card__content">
          <img
            className="card__content__image"
            src="https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=926&q=80"
            alt=""
          />
        </div>
        <div className="bottom-bar">
          <div className="bottom-bar__icon bottom-like">
            <i className="fas fa-heart" />
          </div>
          <div className="bottom-bar__icon bottom-comment">
            <i className="far fa-comment" />
          </div>
          <div className="bottom-bar__icon bottom-share">
            <i className="fas fa-retweet" />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
