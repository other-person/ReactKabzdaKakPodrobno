import React, {useEffect, useState} from "react";

export default {
    title : 'useEffect demo'
}

export const SimpleExample = () => {

    const [fake, setFake] = useState(1)
    const [count, setCount] = useState(1)

    console.log("SimpleExample");

    useEffect(()=> {
    console.log("useEffect every render");
    document.title = count.toString();
    });

    useEffect(()=> {
        console.log("useEffect only first render (componentDidMount)");
        document.title = count.toString();
    }, []);

    useEffect(()=> {
        console.log("useEffect first render and every counter change");
        document.title = count.toString();
    }, [count]);


    return <div>
        Hello, {count} {fake}

        <button onClick={() => setCount(count + 1)}>Add</button>
        <button onClick={() => setFake(fake + 1)}>Add</button>
    </div>
}

export const SetTimeoutExample = () => {

    const [fake, setFake] = useState(1)
    const [count, setCount] = useState(1)

    console.log("SetTimeoutExample");

    // useEffect(()=> {
    //     console.log("useEffect every render");
    //     document.title = count.toString();
    // });

    useEffect(()=>{
        debugger
        setTimeout (()=>{
            console.log("SetTimeout")
            document.title = count.toString()

        }, 2000)
    },[count])

    return <div>
        Hello, {count} {fake}

        <button onClick={() => setCount(count + 1)}>Add</button>
        <button onClick={() => setFake(fake + 1)}>Add</button>
    </div>
}

export const SetIntervalExample = () => {

    const [fake, setFake] = useState(1)
    const [count, setCount] = useState(1)

    console.log("SetTimeoutExample");

    // useEffect(()=> {
    //     console.log("useEffect every render");
    //     document.title = count.toString();
    // });

    useEffect(()=>{

        console.log("Tick-tak :"  + count)

        setInterval (()=>{
        setCount((state)=>(state+1));


        }, 1000)
    },[])

    return <div>
        Counter:  {count}   Fake : {fake}

        {/*<button onClick={() => setCount(count + 1)}>Add</button>*/}
        {/*<button onClick={() => setFake(fake + 1)}>Add</button>*/}
    </div>
}
//api.getUsers().then('')
//setInterval
//indexedDB
//document.getElementId
//document.title = "User"


export const ResetEffectExample = () => {

    const [count, setCount] = useState(0)

    console.log("Component render:" + count);

    useEffect(() => {
        console.log("Effect is done:" + count)

        return ()=> {
            console.log ("RESET EFFECT:" + count);
        }

    },[count])

    const increment = ()=>{setCount(count+1)}

    return <>
        Hello, {count} <button onClick={increment}> Add </button>
        </>


}


export const KeysTrackerExample = () => {

    const [text, setText] = useState("")

    console.log("Component render:" + text);

    useEffect(() => {
        window.addEventListener("keypress", (e)=> {
            console.log(e.code);
            setText((state) => state + e.code);
        });


    },[])

    return <>
        Typed text: {text}
    </>


}


