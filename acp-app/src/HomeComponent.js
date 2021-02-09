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
        <div className="splash-container">
          {/* Image of Austin skyline background */}
          <img src={skyline} className="splash-skyline"/>
          {/* ACP title/logo */}
          <img src={title}  className="splash-logo"/>
        </div>

        <p className="body-24pt home-body-text">
          {/* Home description */}
           The Austin Conservation Project is a student organization that aims to bring together like-minded individuals to preserve, learn about and enjoy the city of Austin. This organization gets members actively involved in environmentalism in Austin by hosting lake cleanups and public advocacy events. The Austin Conservation Project also aims to help students explore more of the culturally unique aspects of Austin, outside of the University bubble. We have a big focus on local businesses and work closely to help promote and spread awareness by interviewing businesses for our social media, hosting events at local restaurants and doing profit shares. Check out some of our past events!
        </p>
        <div className="blue-yellow-bar-center"/>
        <div className="event-img-container">
          {/* Images on Home Page */}
          {imgs}
        </div>
      </div>
    )
  }
}

export default HomeComponent;
