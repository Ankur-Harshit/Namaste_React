// const heading = React.createElement("h1", {id : "heading", xyz:"abc"}, "Hello From React");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// making nested stuffs //
/*
<div parent>
    <div children>
        hello i am h1
        hello i am h2
    <div>
<div>
*/

// React.createElement returns an object, while rendering it is converted to DOM that is understood by Browser

import React from "react";
import ReactDOM from 'react-dom/client';
const parent = React.createElement("div", {id:"parent"}, 
    React.createElement("div", {id:"children"}, 
        [React.createElement("h1",{},"Hello i am h1"),
        React.createElement("h1",{},"Hello i am h2")
        ]
))

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
