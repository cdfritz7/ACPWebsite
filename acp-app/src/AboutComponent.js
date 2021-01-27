import React, {Component} from "react"

import best_leadership from './imgs/best_leadership.png';
import best_new_organization from './imgs/best_new_organization.png';

import "./css/About.css";

class AwardComponent extends Component{
    constructor(props){
      super(props)
    }

    render(){
      return(
        <div className="award-card">
          <img src={this.props.img} className="award-card-img" />
          <p className="text-20pt">
            {this.props.title}
          </p>
        </div>
      )
    }
}

class AboutComponent extends Component{
  render(){
    return(
      <div className="about-grid">
        <div className="about-row-1">
          <div className="about-icon about-icon-book">
            <i class="fas fa-book fa-fw fa-10x"></i>
          </div>
          <div className="about-words-div">
            <div className="about-title-row">
              <p className="text-24pt" >Our Story</p>
              <div className="blue-yellow-bar" />
            </div>
            <div className="body-20pt about-body-row">
             <p>
             In September of 2019, two friends and UT students, Sophie Brandeis and Ian Mitre, were sitting in the PCL library. Instead of studying, they discussed how much of Austin goes unseen by the average UT student. This is where the idea of the Austin Conservation Project was born. They figured if they created an organization that provided students, like themselves, with a platform to engage with the city then they would be able to make a big impact in both their UT and Austin communities. <br/></p>
             <p>
             Since then, the Austin Conservation Project has grown to over 100 members, all dedicated to learning, exploring and conserving all that Austin has to offer. Together, ACP has put on Lady Bird Lake cleanups, Shoal Creek trash pick ups, a concert fundraiser, local business promotions, a mini documentary series called: “Faces of Austin”, bonfire socials, Dirty Martin’s dinners and so much more.</p>
             </div>
          </div>
        </div>

        <div className="about-row-2">
          <div className="about-icon about-icon-people">
            <i class="fas fa-user-friends fa-fw fa-10x"></i>
          </div>
          <div className="about-words-div">
            <div className="about-title-row">
              <p className="text-24pt">Mission Statement</p>
              <div className="blue-yellow-bar" />
            </div>
            <p className="body-20pt about-body-row">
            To provide a platform that brings like-minded and curious students together by offering opportunities to venture outside of the university bubble in order to learn, experience and uncover all that Austin has to offer.
            </p>
          </div>
        </div>

        <div className="about-row-3">
          <div className="about-icon about-icon-trophy">
            <i class="fas fa-trophy fa-fw fa-10x"></i>
          </div>
          <div className="about-words-div">
            <div className="about-title-row">
              <p className="text-24pt" >Awards and Accolades</p>
              <div className="award-blue-yellow-bar" />
            </div>
            <div className="about-awards">
              <AwardComponent
                title="Swing Out Award"
                img={best_new_organization}
                />
              <AwardComponent
                title="Distinguished Leadership Award"
                img={best_leadership}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutComponent;
