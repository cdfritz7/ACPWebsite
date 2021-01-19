import React, {Component} from "react"

import best_leadership from './imgs/best_leadership.svg';
import best_new_organization from './imgs/best_new_organization.svg';

class AwardComponent extends Component{
    constructor(props){
      super(props)
    }

    render(){
      return(
        <div style={{width:"500px", marginRight:"50px", marginLeft:"50px", marginTop:"15px"}}>
          <img src={this.props.img} style={{width:"500px"}} />
          <p style={{padding:"20px", margin:"0px"}} className="text-24pt">
            {this.props.title}
          </p>
          <p className="body-16pt">
            {this.props.text}
          </p>
        </div>
      )
    }
}

class AboutComponent extends Component{
  render(){
    return(
      <div style={{display:"grid", gridTemplateColumns:"100%", gridTemplateRows:"50px, 200px, 50px, 200px, 50px, auto", textAlign:"center"}}>

        <div>
          <div style={{gridRow:"1 / span 1", paddingTop:"100px", paddingBottom:"20px"}}>
            <p className="text-24pt" >Our Story</p>
            <div className="blue-yellow-bar" />
          </div>
          <p className="body-20pt" style={{width:"75vw", margin: "auto", gridRow:"2 / span 1"}}>
          In September of 2019, two friends and UT students, Sophie Brandeis and Ian Mitre, were sitting in the PCL library. Instead of studying, they discussed how much of Austin goes unseen by the average UT student. This is where the idea of the Austin Conservation Project was born. They figured if they created an organization that provided students, like themselves, with a platform to engage with the city then they would be able to make a big impact in both their UT and Austin communities. Since September of 2019 the Austin Conservation Project has grown to over 100 members, all dedicated to learning, exploring and conserving all that Austin has to offer. Together, ACP has put on Lady Bird Lake cleanups, Shoal Creek trash pick ups, a concert fundraiser, local business promotions, a mini documentary series called: “Faces of Austin”, bonfire socials, Dirty Martin’s dinners and so much more.
          </p>
        </div>

        <div>
          <div style={{gridRow:"3 / span 1", paddingTop:"100px", paddingBottom:"20px"}}>
            <p className="text-24pt">Mission Statement</p>
            <div className="blue-yellow-bar" />
          </div>
          <p className="body-20pt" style={{width:"75vw", margin: "auto", gridRow:"4 / span 1"}}>
          To provide a platform that brings like-minded and curious students together by offering opportunities to venture outside of the university bubble in order to learn, experience and uncover all that Austin has to offer.
          </p>
        </div>

        <div>
          <div style={{gridRow:"5 / span 1", paddingTop:"100px", paddingBottom:"20px"}} >
            <p className="text-24pt" >Awards and Accolades</p>
            <div className="blue-yellow-bar" />
          </div>
          <div style={{gridRow:"6 / span 1", width: "80vw", margin:"auto", display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
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
    )
  }
}

export default AboutComponent;
