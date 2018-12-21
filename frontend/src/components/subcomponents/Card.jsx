import React, { Component } from "react";
import { Link } from "react-router-dom";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false
    };
  }
  toggleClass = () => {
    this.setState({ liked: !this.state.liked });
  };

  render() {
    return (
      <div className="card" key={this.props.id}>
        <Link to={`/user/${this.props.creatorName}`}>
          <div className="card__profile" onClick={this.goToProfile}>
            <img
              className="card__profile__picture"
              src={this.props.creatorImage}
              alt=""
            />
            <div className="card__profile__text">
              <div className="card__profile__text__top">
                <h3 className="card__profile__title">{this.props.title}</h3>
              </div>
              <div className="card__profile__text__bottom">
                <p className="card__profile__name">{this.props.creatorName}</p>
              </div>
            </div>
          </div>
        </Link>

        <div className="card__content">
          <img className="card__content__image" src={this.props.image} alt="" />
        </div>
        <div className="bottom-bar">
          <div className="bottom-bar__icon bottom-like">
            <i
              className={
                this.state.liked ? "heart--filled fas fa-heart" : "far fa-heart"
              }
              onClick={this.toggleClass}
            />
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
