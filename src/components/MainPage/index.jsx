import React, {useState} from "react";
import './style.css'
import Form from "../Forms";

const Main = ()=>{
    const [date, setDate] = useState('');
    const [daysMonthYears, SetdaysMonthYears] = useState({
        day: 0,
        months: 0,
        years: 0
    });

    return(
        <>
            <h1 className="main-title">
                Datas
            </h1>

            <Form 
                date={date} 
                setDate={setDate}
                daysMonthYears={daysMonthYears}
                SetdaysMonthYears={SetdaysMonthYears}
            />
        </>
    )
}

export default Main;