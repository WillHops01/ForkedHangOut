import React from "react";
import {Link} from "react-router-dom";
import { withRouter } from "react-router-dom";

class Banner extends React.Component{
    constructor(props){
        super(props);
        this.logSwitch=this.logSwitch.bind(this);
        this.loggedInElement=this.loggedInElement.bind(this);
        this.loggedOutElement=this.loggedOutElement.bind(this);

    }

    loggedInElement(){
        return(
            <div>
                <button onClick={()=>this.props.logout()}>
                    Log Out
                </button>
            </div>
        )
    }

    loggedOutElement(){
        return(
            <nav id="session-link-container">
                <Link className="session-link-button" to="/login">
                    Login
                </Link>
                <Link className="session-link-button" to="signup">
                    Create Account
                </Link>
            </nav>
        )
    }

    logSwitch(){
        if(this.props.currentUser){
            return this.loggedInElement();
        }
        else{
            return this.loggedOutElement();
        }
    }

    render(){
        return(
            <div id="banner-container">
                <button
                    type="button"
                    id="banner-main-button"
                    onClick={()=>{this.props.history.push("/")}}>
                        <div id="banner-container-text">
                            HangOut
                        </div>
                </button>
                {this.logSwitch()}
            </div>
        )
    }
        
}
export default withRouter(Banner);