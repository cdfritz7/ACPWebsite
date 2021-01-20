import React, {Component} from "react"

import './css/Home.css';

import skyline from './imgs/skyline.png';
import title from './imgs/logo.png';

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('./imgs/front_page_imgs/', false, /\.(JPG)$/));

class HomeComponent extends Component{
  render(){

    //create list of images to display
    var imgs = []
    for(var i = 0; i < images.length; i++){
      imgs.push(
        <div>
          <img className="event-img" src={images[i]['default']} />
        </div>
      )
    }

    return(
      <div>
        <div style={{height:"100vh", position:"relative"}}>
          <img src={skyline} style={{opacity:0.5, width:"100vw", maxWidth:"100%", position:"absolute", left:"0", bottom:"0"}}/>
          <img src={title} style={{width:"40vw", position:"absolute", top:"30vh", marginLeft:"auto", marginRight:"auto", left:"0", right:0, zIndex:1}} />
        </div>

        <p className="text-16pt" style={{maxWidth:"80vw", margin:"auto", paddingBottom:"20px"}}>
           The Austin Conservation Project is a student organization that aims to bring together like-minded individuals to preserve, learn about and enjoy the city of Austin. This organization gets members actively involved in environmentalism in Austin by hosting lake cleanups and public advocacy events. The Austin Conservation Project also aims to help students explore more of the culturally unique aspects of Austin, outside of the University bubble. We have a big focus on local businesses and work closely to help promote and spread awareness by interviewing businesses for our social media, hosting events at local restaurants and doing profit shares. Check out some of our past events!
        </p>
        <div className="blue-yellow-bar"/>
        <div className="event-img-container">
          {imgs}
        </div>
      </div>
    )
  }
}

export default HomeComponent;
