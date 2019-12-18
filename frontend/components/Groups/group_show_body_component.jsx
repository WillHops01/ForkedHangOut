import React from "react";
import ShowAbout from "./show_about_component";

class GroupShowBody extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      about: "selected",
      events: "unselected",
      members: "unselected",
    };
    this.renderNavBar = this.renderNavBar.bind(this);
    this.changeSelect = this.changeSelect.bind(this);
    this.renderBody = this.renderBody.bind(this);
  }

  changeSelect(buttonTitle){
    //check if click is on already selected element
    if (this.state[buttonTitle] === "selected"){
      return;
    }

    //else
    let newState = {};
    Object.keys(this.state).forEach(key => {      
      if(key === buttonTitle){
        newState[key] = "selected";
      } else {
        newState[key] = "unselected";
      }
    });    
    this.setState(newState);    
  }

  renderNavBar(){    
    return(
      <section id="group-show-navigation">
        <div id="group-show-nav-container">

          <ul id="group-nav-clickables-ul">
            <li className="group-nav-clickables-li">
              <button className={`${this.state.about} group-nav-buttons`}
                      onClick={() => this.changeSelect("about")}>
                About
              </button>
            </li>
            <li className="group-nav-clickables-li">
              <button className={`${this.state.events} group-nav-buttons`}
                      onClick={() => this.changeSelect("events")}>
                Events
              </button>
            </li>
            <li className="group-nav-clickables-li">
              <button className={`${this.state.members} group-nav-buttons`}
                      onClick={() => this.changeSelect("members")}>
                Members
              </button>
            </li>
          </ul>

          <div id="group-nav-member-status">
            JOIN TODAY
          </div>
        </div>
      </section>
    )
  }

  renderBody(){
    if(this.state.about === "selected"){
      return ( <ShowAbout group={this.props.group}/> )
    } else {
      return null;
    }
  }

  render(){
    return(
      <div id="group-show-body-container">    
        {this.renderNavBar()} 
        {this.renderBody()}
        

      </div>
    )
  }
}

export default GroupShowBody;