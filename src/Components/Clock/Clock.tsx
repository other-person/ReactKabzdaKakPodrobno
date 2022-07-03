import React, {useEffect, useState} from "react";

type clockType = {

};

let getDigitsString = (num: number) => num < 10 ? "0" + num : num;

export const Clock = (props: clockType) => {

    const [date, setData] = useState(new Date())

    useEffect (()=>{

        const intervalId =  setInterval(()=>{
            console.log("Tik-Tak")
            setData(new Date)
        },1000)
        return () => clearInterval(intervalId)
    },[])

    const getHours = getDigitsString(date.getHours());
    const getMinutes = getDigitsString(date.getMinutes());
    const getSeconds = getDigitsString(date.getSeconds());

    return    <div>
        <span>{getHours}</span>
        :
        <span>{getMinutes}</span>
        :
        <span>{getSeconds}</span>

    </div>

}


