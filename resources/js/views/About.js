import React from "react";
import FullCalendar,  { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import { getUser, getToken, removeUserSession, setUserSession, getPermission } from '../Utils/Common';

import "../../css/calendar.css";

// must manually import the stylesheets for each plugin
import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

export default class About extends React.Component {

  // calendarComponentRef = React.createRef(); 

  constructor(props) {
    super(props)
    this.state = {
      calendarWeekends: true,
      calendarEvents: [
        // initial event data
        // { title: "Event Now", start: new Date() }
      ],
      seletedDate: new Date()
    };

    this.calendarComponentRef = React.createRef(); 

    this.toggleWeekends=this.toggleWeekends.bind(this);
    this.gotoPast=this.gotoPast.bind(this);
    this.handleDateClick=this.handleDateClick.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleView = this.handleView.bind(this);

    this.logoutStyle = {
      backgroundColor: 'transparent',
      color: 'black',
      fontSize: '20px',
      lineHeight: '30px',
    };

    this.buttonStyle = {
      width: '100%',
      borderRadius: '20px',
      backgroundColor: '#A2E355',
      lineHeight: '25px',
      cursor: 'pointer',
      color: 'white',
      border: 'none',
    };

  }
  handleDateClick(arg) {
    let str = formatDate(arg.dateStr, {
      month: 'long',
      year: 'numeric',
      day: 'numeric'
    });

    // if (confirm("Would you like to add an event to " + str + " ?")) {
      this.setState({
        seletedDate : arg.dateStr
      });
      // console.log(this.state.seletedDate);
    // }
  };

  render() {
    return (
      <div className="demo-app">
        <div className="tx-center">
            <div className="row">
                <h2>FICHAS</h2>
            </div>
            <div className="row">
                <h3>Selecciona una dia del calendario para ver tus fichas</h3>
            </div>
            <div className="row">
                <h3>creadas y luego click en VER FICHAS</h3>
            </div>
            <div className="row">
                <h3><br /><br /></h3>
            </div>
        </div>
        <div className="demo-app-calendar">
          <FullCalendar
            initialView="dayGridMonth"
            headerToolbar={{
              left: "prev",
              center: "title",
              right: "next"
            }}
            buttonText={{
              prev: 'Prev Month',
              next: 'Next Month'
            }}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            ref={this.calendarComponentRef}
            weekends={this.state.calendarWeekends}
            events={this.state.calendarEvents}
            dateClick={this.handleDateClick}
          />
        </div>
        <div className="row">
            <h3><br /></h3>
        </div>
        <div className="row tx-center">
            <div className="col-lg-4"></div>
            <div className="col-lg-4 tx-center">
                <button style={this.buttonStyle} onClick={this.handleView}>VER FICHAS</button>
            </div>
            <div className="col-lg-4"></div>
        </div>
        <div className="row tx-center">
            <div className="col-lg-4"></div>
            <div className="col-lg-4">
                <button style={this.logoutStyle} onClick={this.handleLogout}>Cerrar Sesion</button>
            </div> 
            <div className="col-lg-4"></div>          
        </div>
      </div>
    );
  }

  toggleWeekends() {
    this.setState({
      // update a property
      calendarWeekends: !this.state.calendarWeekends
    });
  };

  handleLogout() {
    removeUserSession();
    this.props.history.push('/login');
  }

  handleView() {
    console.log("========>", this.state.seletedDate);
    this.props.history.push('/labdateview/'+this.state.seletedDate);
  }

  gotoPast() {
    let calendarApi = this.calendarComponentRef.current.getApi();
    calendarApi.gotoDate("2000-01-01"); // call a method on the Calendar object
  };

}
