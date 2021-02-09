import React, {Component} from "react"

import "./css/People.css";

import Carousel from 'react-bootstrap/Carousel';
import Modal from "react-bootstrap/Modal";

//import all images from a directory
function importAll(r) {
  return r.keys().map(r);
}

const member_monday_images = importAll(require.context('./imgs/member_monday/', false, /\.(JPG)$/));

class PeopleComponent extends Component{

  constructor(props){
    super(props)

    this.state = {show:false};

    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  // Closes the component
  handleClose(){ 
    this.setState({show:false})
  }
  // Opens the component
  handleOpen(){
    this.setState({show:true})
  }

  render(){

    //item to hold the images that will be displayed in the carousel
    var carousel_items = [];
    for(var i = 0; i < member_monday_images.length; i++){ //Grabs each image from member monday folder for a carousel slide
      carousel_items.push(
        <Carousel.Item>
          <img
            src={member_monday_images[i]['default']}
            width="400px"
            height="707px"
          />
        </Carousel.Item>,
      )
    }
    // Shows the photos of all of the team Members
    return(
      <div>
        {/* Title */}
        <p className="text-24pt page-title">
           Leadership Team
        </p>
        <div className="blue-yellow-bar-center"/>
        {/* Container for Cards */}
        <div className="officer-container">
          {/* Card */}
          <div className="officer-card">
            {/* Image for Card  */}
            <img className="officer-img" src={require('./imgs/officers/presidents.JPG')['default']} /> 
            {/* Text content for Card */}
            <p className="text-20pt">Sophie and Ian Mitre, Co-Founders and Presidents</p>
          </div>
          <div className="officer-card">
            <img className="officer-img" src={require('./imgs/officers/hank_groberg.JPG')['default']} />
            <p className="text-20pt">Hank Groberg, Creative Team</p>
          </div>
          <div className="officer-card">
            <img className="officer-img" src={require('./imgs/officers/lauren_obrian.JPG')['default']} />
            <p className="text-20pt">Lauren O'Brian, Communications</p>
          </div>
          <div className="officer-card">
            <img className="officer-img" src={require('./imgs/officers/cecilia_bibbo.JPG')['default']} />
            <p className="text-20pt">Cecilia Bibbo, Design and Merchandise</p>
          </div>
          <div className="officer-card">
            <img className="officer-img" src={require('./imgs/officers/lily_jacaruso.JPG')['default']} />
            <p className="text-20pt">Lily Jacaruso, Creative</p>
          </div>
          <div className="officer-card">
            <img className="officer-img" src={require('./imgs/officers/thomas_pastilha.JPG')['default']} />
            <p className="text-20pt">Thomas Pastilha, Management and Special Projects</p>
          </div>
          <div className="officer-card">
            <img className="officer-img" src={require('./imgs/officers/elaine_finney.JPG')['default']} />
            <p className="text-20pt">Elaine Finney, Philanthropy</p>
          </div>
        </div>
        {/* Pop-up for when Nominate button is clicked */}
        <Modal className="nominate-modal" size="lg" show={this.state.show} onHide={this.handleClose} centered>
          <Modal.Header className="text-24pt" closeButton>
            {/* Pop-up Title*/}
            <Modal.Title>Nominate for Member Monday</Modal.Title>
          </Modal.Header>
          <Modal.Body className="body-16pt">
            {/* Fields for Nomination information */}
            <form
            action="https://formsubmit.co/austinconservationproject@gmail.com"
            method="POST">
              <p className="nominate-form-subtitle">Your Name:</p>
              <input
                type="name"
                name="name"
                className="nominate-form-input"
                required/>
              <p className="nominate-form-subtitle">Who You Want to Nominate:</p>
              <input
                type="name"
                name="name"
                className="nominate-form-input"
                required/>
              <p className="nominate-form-subtitle">Why Are you Nominating This Person?</p>
              <textarea
                type="favorite_things_about_austin"
                name="favorite_things_about_austin"
                className="nominate-form-input"
                rows="8"
                required/>
              <br/>
              <button
                type="submit"
                className="my-button-md my-button-animation">
                Send!
              </button>
            </form>
          </Modal.Body>
        </Modal>
        {/* Page divider for Member Monday */}
        <p className="text-24pt page-title">
           Member Monday
        </p>
        <div className="blue-yellow-bar-center"/>
        {/* Carousel for Member monday */}
        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
          <Carousel className="my-carousel">
            {carousel_items}
          </Carousel>
          {/* Member Monday Nomination title and content */}
          <div style={{padding:"50px", width:"600px"}}>
            <div style={{textAlign:"center"}}>
              <p className="nominate-title">
                Member Monday Nomination
              </p>
            </div>
            <p className="nominate-body">
              Every week a member of ACP is chosen to be recognized.
              Nominate one of your ACP friends to be the featured member
              this Monday on the Instagram!
            </p>
            <div style={{textAlign:"center"}}>
              {/* Nominate button that brings up Modal/pop-up mentioned earlier */}
              <button className="my-button my-button-animation" onClick={this.handleOpen}>
                Nominate!
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PeopleComponent;
