import React from "react";
import ReactDOM from "react-dom";
import Greeting from "./js/components/Greeting";
import './css/index.css';

const App = () => {
	return (
        <div>
            <Greeting name="World" time="12pm"/>
            <Greeting name="P" time="1pm" />
        </div>
    )
    
}

ReactDOM.render(<App />, document.getElementById('root'));