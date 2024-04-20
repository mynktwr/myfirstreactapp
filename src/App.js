import logo from './logo.svg';
import './App.css';
import React from 'react';
import MyComponent from './MyComponent';
import MyComponentClass from './MyComponentClass';

// const  App = () =>
//  {
//   const myFunction = () =>
//   {
//     console.log("This is my function");
//   }
//   myFunction()

//   const buttonHandler = () =>
//   {
//     console.log("Button is clicked!!!!");
//   }


  // let firstVariable =1
  // console.log("firstVariable",firstVariable);
  // firstVariable = 3
  // console.log("firstVariable",firstVariable);

  

  // var thirdVariable =1
  // console.log("thirdVariable",thirdVariable);
  // thirdVariable = 3
  // console.log("thirdVariable",thirdVariable);

  // const secondVariable =1
  // console.log("secondVariable",secondVariable);
  // // secondVariable = 3
  // console.log("secondVariable",secondVariable);
  // const el1 = <h1>This is a simple jsx code</h1>
  // console.log("el1:",el1);
//   return  React.createElement("div",null,"Hello Mayank!!",

//   React.createElement("p",null , "this is my Paragraph!!"),
//   React.createElement("ul", null ,
//      React.createElement("li",null , "This is list item 1"),
//      React.createElement("li",null , "This is list item 2"),
//      React.createElement("li",null , "This is list item 3"),
//      React.createElement("li",null , "This is list item 4"),
//     )
// )
// return <div>
//   <p>This is my Paragraph!!</p>
//   <ul>
//       <li>This is list item 1</li>
//       <li>This is list item 2</li>
//       <li>This is list item 3</li>
//       <li>This is list item 4</li>

//   </ul>

//     <MyComponent color="yellow" size="medium"/>
//     <br/>
//     <MyComponentClass color="red" size="medium" onClick = {()=>
//     {
//       console.log("This is executed in App.js");
//     }}/>
    
   
 
// </div>

  
// }

class App extends React.Component
{
  state = {classComponent :<MyComponentClass color="red" size="medium" onClick = {()=>
         {
            console.log("This is executed in App.js");
         }}/>}

         unMountFunction = () =>
          {
             this.setState({classComponent:"Class component unmounted now!"})
          }
          render()
          {
            return <div>
  <p>This is my Paragraph!!</p>
  <ul>
      <li>This is list item 1</li>
      <li>This is list item 2</li>
      <li>This is list item 3</li>
      <li>This is list item 4</li>

  </ul>

    <MyComponent color="yellow" size="medium"/>
    <br/>
    {this.state.classComponent}
    <br/>
    <button onClick={this.unMountFunction}>unmount button</button>
    
   
 
</div>

  
}

}


      

export default App;
