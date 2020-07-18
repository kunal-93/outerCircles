import React from "react";
import ReactDOM from "react-dom";
import Homepage from "./js/pages/homepage/Homepage";
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
	return (
        <div>
            <Homepage/>
        </div>
    )
    
}

ReactDOM.render(<App />, document.getElementById('root'));