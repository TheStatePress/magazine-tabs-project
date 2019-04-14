import React from 'react';//must import react every time

//named function
//function adf() {}

//anonymous function or function expression
//const asdf = function() {} 

//arrow function (which is a type of function expression)
//const asdf = () => {}

// const Header = (props) => {
//     return(
//         <h1>Hello {props.name}</h1>//curly braces to turn it into java script
//     )
// }
//same as
const Header = props =>
    <h1 style={{ color: 'orange', fontStyle:'italic'}}>
    {props.children}</h1>

export default Header;

//everything is a prop, get to it by props._____