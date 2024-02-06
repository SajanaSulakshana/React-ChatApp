import React, { Component } from "react";
import "./userProfile.css";

export default class UserProfile extends Component {
  toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };
  render() {
    return (
      <div className="main__userprofile">
        <div className="profile__card user__profile__image">
          <div className="profile__image">
            <img src="https://media.licdn.com/dms/image/D5603AQGGPzv57-EGDw/profile-displayphoto-shrink_200_200/0/1677293646974?e=1712793600&v=beta&t=4uT8HuVi-m_ec5ZI6g2m3_NLmaANYRznOXTgldGNDZc" />
          </div>
          <h4>Sajana Sulakshana</h4>
          <p>CEO & Founder at Highly Inc</p>
        </div>
        <div className="profile__card">
          <div className="card__header" onClick={this.toggleInfo}>
            <h4>Information</h4>
            <i className="fa fa-angle-down"></i>
          </div>
          <div className="card__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            ultrices urna a imperdiet egestas. Donec in magna quis ligula
          </div>
        </div>
      </div>
    );
  }
}
