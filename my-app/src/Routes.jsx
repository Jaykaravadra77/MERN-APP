import React from "react";
import Layout from "./Layout/Layout";
import { BrowserRouter, Route, Link,Switch } from "react-router-dom";
import App from "./App";
import Adduser from "./Adduser";
function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route exact path="/adduser" component={Adduser}/>
            </Switch>

        </BrowserRouter>
    )
}

export default Routes;
