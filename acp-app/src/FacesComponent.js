import React, {Component} from "react"

import './css/Faces.css';
import data from './content_json/faces_of_austin.json';

/*
class that holds data for the faces of austin videos
*/
class FacesVideo{
  constructor(link, title, intro, caption1, caption2){
    this.link = link;
    this.title = title;
    this.intro = intro;
    this.caption1 = caption1;
    this.caption2 = caption2;
  }
}

/*
a card that holds an embedded youtube video
guide to embedding youtube videos with html
https://www.w3schools.com/html/html_youtube.asp
*/
class VideoCard extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="video-card">
        {/* Container for Faces of Austin */}
        <p className="video-card-title">
          {/* Faces of Austin Title */}
          {this.props.title}
        </p>
        <iframe className="video-card-video"
          src={this.props.link}>
            {/* Embedded youtube video */}
        </iframe>
        <p className="video-card-caption">
          {/* Captions for Faces of austin*/}
          <div>{this.props.intro}</div>
          <div>{this.props.caption1}</div>
          <div>{this.props.caption2}</div>
        </p>
      </div>
    )
  }
}

class VideoCarousel extends Component{

  /*
  read in data holding links, titles and captions to each of the
  Faces of Austin videos
  */
  constructor(props){
    super(props);

    this.state = {
      index: 0,
    };

    this.videos = []

    for(var i = 0; i < data.length; i++){
      let link = data[i].link;
      let title = data[i].title;
      let intro = data[i].intro;
      let caption1 = data[i].caption1;
      let caption2 = data[i].caption2;
      var my_video = new FacesVideo(link, title, intro, caption1, caption2)
      this.videos.push(my_video)
    }

    //bind this to methods
    this.decrement_index = this.decrement_index.bind(this);
    this.increment_index = this.increment_index.bind(this);
  }

  /*
  decrement index to display the previous video
  wraps around to the last video in the list
  */
  decrement_index(){
    var new_index = (this.state.index - 1 ) % this.videos.length
    if(new_index < 0){
      new_index = this.videos.length-1
    }
    this.setState({index:new_index})

  }

  /*
  increment index to display the next video
  wraps around to the first video in the list
  */
  increment_index(){
    this.setState({index:(this.state.index + 1 ) % this.videos.length})
  }

  render(){
    return(
      <div className="video-carousel">
        <div>
          <button
          className="carousel-button my-button-animation cb-right"
          onClick={()=>{this.decrement_index()}}>
            &#60;
          </button>
        </div>

        <VideoCard
          title={this.videos[this.state.index].title}
          link={this.videos[this.state.index].link}
          intro={this.videos[this.state.index].intro}
          caption1={this.videos[this.state.index].caption1}
          caption2={this.videos[this.state.index].caption2}
        />

        <div>
          <button
          className="carousel-button my-button-animation cb-left"
          onClick={()=>{this.increment_index()}}>
            &#62;
          </button>
        </div>
      </div>
    )
  }
}

class FacesComponent extends Component{
  render(){
    // Title and Description of Faces of Austin
    return(      
      <div>
        <p className="text-24pt page-title">
          
           Faces of Austin
        </p>
        <div className="blue-yellow-bar-center"/>
        <p className="body-20pt centered-text" style={{marginBottom:"50px", paddingTop:"15px"}}>
           Faces of Austin is a mini documentary series put on by ACP members
           that spotlights different local businesses and the people working
           there around Austin. Check out some of our latest features!
        </p>

        <VideoCarousel />
      </div>
    )
  }
}

export default FacesComponent;
