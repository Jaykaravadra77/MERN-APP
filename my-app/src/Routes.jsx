import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Adduser from "./Adduser";
import NoteFound from "./404";
function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route exact path="/adduser" component={Adduser}/>
                <Route exact path="/edituser/:id" component={Adduser}/>
                <Route   component={NoteFound}/>
            </Switch>

        </BrowserRouter>
    )
}

export default Routes;
