import React from 'react';
import BannerContainer from "./Banner/banner_container"
import SessionContainer from "./Session/session_container";
import {Switch, Route} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';



const TestComponent = () => (
    <div>
        test login page
    </div>
)

const App = () => {
    const sessionprops = {
        form: "login"
    }
    return(
        <div id="app">
            <BannerContainer/>
            {/*<Route path="/login" component={TestComponent}/>*/}
            <Switch>
                <AuthRoute component={SessionContainer} exact path="/login" />
                <AuthRoute component ={TestComponent} exact path="signup"/> 
            </Switch>
        </div>
    )
}

export default App;