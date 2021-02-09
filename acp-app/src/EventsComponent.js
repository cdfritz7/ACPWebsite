import React, {Component} from "react";

import Calendar from 'react-calendar';

import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Modal from 'react-bootstrap/Modal';

import './css/Calendar.css';
import './css/Events.css';
import data from './content_json/events.json';

/*
class to encapsulate events, is passed between calendar and EventTicker
to populate Modals
*/
class Event {
  constructor(name, description, day, month, year){
    this.name = name;
    this.date = new Date(year, month-1, day);
    this.description = description;
  }
}

/*
component to be displayed on a calendar tile
*/
class EventTicker extends Component{
  constructor(props){
    super(props)

    this.state = {
      event_name:null,
      event_date:null,
      event_description:null,
      show_modal:false
    }

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen(event){
    this.setState({
      show_modal:true
    })
  }

  handleClose(){
    this.setState({
      show_modal:false
    })
  }

  render(){
    return(
      <div style={{display:"inline-block"}}>
        {/* Modal/pop-up that happens when you click one of the events on the events page */}
        <Modal className="nominate-modal" size="lg" show={this.state.show_modal} onHide={this.handleClose} centered>
          <Modal.Header className="body-24pt" closeButton>
            {/* Modal/pop-up title */}
            <Modal.Title>{this.props.event.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="body-16pt">
            {/* Modal/pop-up description*/}
            {this.props.event.description}
          </Modal.Body>
        </Modal>

        <OverlayTrigger
          placement="right"
          delay={{ show: 100, hide: 0 }}
          overlay={
                   <Tooltip id="button-tooltip" style={{fontSize:"16pt"}}>
                     {/* Shows the event's name when clicked */}
                     {this.props.event.name}
                   </Tooltip>
                 }>
          <div className="dot" onClick={()=>this.handleOpen(this.props.event)}>
            {/* Dot that shows up on a day with an event */}
          </div>
        </OverlayTrigger>
      </div>
    )
  }
}

class EventsComponent extends Component{

  constructor(props){
    super(props);

    //read in data from json and convert to event objects
    this.data = []

    for(var i = 0; i < data.length; i++){


      let name = data[i]['name']
      let desc = data[i]['description']
      let day = data[i]['day']
      let month = data[i]['month']
      let year = data[i]['year']

      let my_event = new Event(name, desc, day, month, year)

      this.data.push(my_event)
    }

    //bind methods to "this"
    this.isEventDate = this.isEventDate.bind(this);
  }

  /*
  returns components corresponding to a given date, null otherwise
  */
  isEventDate(date){

    //create list of tickers to be displayed on a date tile
    var event_ticker_list = [<br/>]
    for(var i = 0; i < this.data.length; i++){
      if(date.getTime() === this.data[i].date.getTime()){
        event_ticker_list.push(<EventTicker event = {this.data[i]}/>)
      }
    }

    //filler if there are no events on this date
    if(event_ticker_list.length === 1){
      event_ticker_list.push(<div className="dot" style={{backgroundColor:"#00000000"}}/>)
    }

    return event_ticker_list;
  }

  render(){
    return(
      <div className="events-container">
        {/* Calendar for the events page */}
        <Calendar
        
          className="calendar"
          tileContent={({ activeStartDate, date, view }) => this.isEventDate(date)}
          onDrillDown={({ activeStartDate, view }) => null}
          onDrillUp={({ activeStartDate, view })=>null}/>
      </div>
    )
  }
}

export default EventsComponent;
