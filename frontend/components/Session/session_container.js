import {connect} from "react-redux";
import { login, signup } from "../../actions/session_actions";
import SessionForm from "./session_form";

const msp = () => {
    return{
    }
}

const mdp = dispatch => {
    return{
        loginSubmit: (user) => dispatch(login(user)),
        signupSubmit: (user) => dispatch(signup(user))
    }
}

export default connect(msp,mdp)(SessionForm);