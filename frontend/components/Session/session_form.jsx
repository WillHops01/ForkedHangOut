import React from "react";
import {Link} from "react-router-dom";
import { withRouter } from "react-router-dom";

class SessionForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            formType: ((this.props.location.pathname == "/login") ? ("login"):("signup")),
            username: "",
            password: "",
            email: ""
        }
        this.loginForm = this.loginForm.bind(this);
        this.getUserInfo = this.getUserInfo.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    demoLogin(){
        let user = Object.assign({},{
            email: "DemoUser",
            password: "hunter2"
        })
        this.props.loginSubmit(user).then(()=>
            this.props.history.push("/"));
    }

    updateField(info){
        return e => this.setState({
            [info]: e.currentTarget.value
        })
    }

    submitForm(e){
        e.preventDefault();
        let user = Object.assign({},{
            username: this.state.username,
            password: this.state.password,
            email: this.state.email
        })
        if (this.state.formType == "login"){
            this.props.loginSubmit(user).then(()=>
                this.props.history.push("/")
            )
        }
    }

    getUserInfo(){
        let submitText = "Log In"
        return(
            <form id="session-form" onSubmit={this.submitForm}>
                <label className="session-form-box">
                    Email Address:
                </label>
                <input type="text" 
                        className="session-form-box input-field"
                        value={this.state.email}
                        onChange={this.updateField("email")}/>
                <label className="session-form-box">
                    Password:
                </label>
                <input type="password" 
                        className="session-form-box input-field"
                        value={this.state.password}
                        onChange={this.updateField("password")}/>
                {this.state.formType=="signup"
                    &&
                        <div>
                            SignUp
                        </div>
                }
                <input type="submit" value={submitText} id="session-form-submit"/>    
            </form>
        )
    }

    loginForm(){
        return(
            <div id="session-form-inner-container">
                <section className="login-form-section" id="login-form-head">
                    <h2 id="login-form-login" className="session-form-header">
                        Log In
                    </h2>
                    <div id="login-form-registered" className="session-form-header">
                        Not registered with us yet?
                        <Link to="signup" className="session-link">Sign Up</Link>
                    </div>
                </section>
                <section className="login-form-section">
                    {this.getUserInfo()}
                </section>
                <section className="login-form-section" id="login-form-foot">
                    <div id="or-container">
                        <div id="login-form-or">
                            Or
                        </div>
                    </div>
                    <div id="demo-user-button-container">
                        <img src="Appacademylogo.png" />
                        <button 
                            type="button"
                            onClick={()=>this.demoLogin()}
                            id="demo-user-button">
                                Demo User Log In
                        </button>
                    </div>
                </section>
            </div>
        )
    }

    render(){
        console.log(this.state.formType)
        return(
            <div id="session-form-container">
                {(this.state.formType=="login") ? 
                (this.loginForm()):
                (<div/>)
                }
            </div>
        )
    }
}

export default withRouter(SessionForm);

