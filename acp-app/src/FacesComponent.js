import React, {Component} from "react"

import './css/Faces.css';
import data from './content_json/faces_of_austin.json';

/*
class that holds data for the faces of austin videos
*/
class FacesVideo{
  constructor(link, title, caption){
    this.link = link;
    this.title = title;
    this.caption = caption;
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
        <p className="video-card-title">
          {this.props.title}
        </p>
        <iframe className="video-card-video"
          src={this.props.link}>
        </iframe>
        <p className="video-card-caption">
          {this.props.caption}
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
      let caption = data[i].caption;
      var my_video = new FacesVideo(link, title, caption)
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
      <div style={{display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  justifyContent:"center"
                }}>

        <div>
          <button
          className="carousel-button my-button-animation"
          style={{float:"right", margin:"15px", marginTop:"350px", borderRadius:"50%"}}
          onClick={()=>{this.decrement_index()}}>
            &#60;
          </button>
        </div>

        <VideoCard
          title={this.videos[this.state.index].title}
          link={this.videos[this.state.index].link}
          caption={this.videos[this.state.index].caption}
        />

        <div>
          <button
          className="carousel-button my-button-animation "
          style={{float:"left", margin:"15px", marginTop:"350px", borderRadius:"50%"}}
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
    return(
      <div>
        <p className="text-24pt page-title">
           Faces of Austin
        </p>
        <div className="blue-yellow-bar"/>
        <p className="text-16pt centered-text" style={{marginBottom:"50px", paddingTop:"15px"}}>
           Faces of Austin is a mini documentary series put on by ACP members
           that spotlights different local businesses and the people working
           there around Austin. Check out some of our latest features!
        </p>

        <VideoCarousel style={{marginBottom:"250px"}}/>
      </div>
    )
  }
}

export default FacesComponent;
