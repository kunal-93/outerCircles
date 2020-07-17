import React from "react";

const Greeting = ({name, time}) => {
	return (
        <div>
            <h1>Hello, {name}!</h1>
            <h2>time : {time}</h2>
        </div>
    )
}

export default Greeting;