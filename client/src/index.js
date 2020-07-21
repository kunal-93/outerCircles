import React from "react";
import ReactDOM from "react-dom";

// CSS Imports
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';

// Router Imports
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Component Imports
import Header from "components/Header";
import Footer from "components/Footer";

// Page Imports
import ExplorePage from "./js/pages/explore/ExplorePage";

const Page = Main =>{
    return ({...props}) => {
        return (
            <>
                <Header />
                <Main {...props}/>
                <Footer /> 
            </> 
        )
    }
}

const App = () => {
	return (
        <Router>
            <Switch>
                <Route exact path="/" component={Page(ExplorePage)} />
                <Route exact path="/explore" component={Page(ExplorePage)} />
            </Switch>
        </Router>
    )
    
}

ReactDOM.render(<App />, document.getElementById('root'));