import React, {useState} from "react";
import './style.css'
import Form from "../Forms";
import showDate from "../../utils/showDate";

const Main = ()=>{
    const [date, setDate] = useState('');

    const [daysMonthYears, setDaysMonthYears] = useState({
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
                setDaysMonthYears={setDaysMonthYears}
            />

            <p className="date">
                {showDate(date, daysMonthYears)}
            </p>
        </>
    )
}

export default Main;