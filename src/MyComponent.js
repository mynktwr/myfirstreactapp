import { useState } from "react";

const MyComponent = (props) =>
{

    const [counter , setCounter] = useState(0)
    const [myString , setMyString] = useState("Default")
    const [object , setObject] = useState({
        key1:"this is property's value",
        key2: 2,
        key3: true,
        key4: [{}],
        key5: {}
    })

    console.log("props: ", props);
    console.log("color: ", props.color);

    const incrementCounter = () =>
    {
        setCounter(counter+1)
    }

    return <div>
        <h1>Functional Component</h1>
        Hello React !!!!<br/>
        color : <label style={{backgroundColor:props.color}}>{props.color}</label>
        <br/>
        -------------------------
        <br/>
        Counter : {counter}
        <br/>
        <button onClick={incrementCounter}>Update Counter</button>

    </div>
}
export default MyComponent