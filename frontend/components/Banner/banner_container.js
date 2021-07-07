import {connect} from "react-redux";
import {logout} from "../../actions/session_actions";
import Banner from "./banner";

const msp = ({session, entities}) => {
    return{
        currentUser: entities.users[session.id],
        groups: entities.groups
    }
}

const mdp = (dispatch) => {
    return{
        logout: () => dispatch(logout())
    }
}

export default connect(msp, mdp)(Banner);