import React from "react";
import ReactDOM from 'react-dom/client';

// using pure React
// const heading = React.createElement("h1", {id:"heading"}, "Namaste React🚀");
// console.log(heading);

// using JSX

// React element

const Title = ()=> (
<h1 className="head">
    Namaste React Using JSX🚀</h1>
)

// inside curly we can write js
// React component
const Heading = ()=>(
    <div id="container">
        <Title />
        <Title></Title>
        {Title()}
        <h1 className="heading">React Functional Component</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);