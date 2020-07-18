import React from "react";
import ReactDOM from "react-dom";
import Homepage from "./js/pages/homepage/Homepage";
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Article from "./js/pages/article/article";

const App = () => {
	return (
        <div>
            <Article/>
        </div>
    )    
}

ReactDOM.render(<App />, document.getElementById('root'));