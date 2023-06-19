import './style.css'

const Form = ({ date, setDate, daysMonthYears, setDaysMonthYears }) => {
    return(
        <form className="main-form">
            <div>
                <label>
                    <span >Data: </span>
                    <input 
                        type="date"
                        className="main-date"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                    />
                </label>
            </div>

            <div>
                <label>
                    <span>+/- Dias: </span>
                    <input 
                        type="number" 
                        className="number-input"
                        value={daysMonthYears.days}
                        onChange={e => setDaysMonthYears({
                            ...daysMonthYears,
                            days: e.target.value
                        })}
                    />
                </label>

                <label>
                    <span>+/- Meses: </span>
                    <input 
                        type="number" 
                        className="number-input"
                        value={daysMonthYears.month}
                        onChange={e => setDaysMonthYears({
                            ...daysMonthYears,
                            months: e.target.value
                        })}
                    />
                </label>

                <label>
                    <span>+/- Anos: </span>
                    <input 
                        type="number" 
                        className="number-input"
                        value={daysMonthYears.years}
                        onChange={e => setDaysMonthYears({
                            ...daysMonthYears,
                            years: e.target.value
                        })}
                    />
                </label>
            </div>
        </form>
    )
}

export default Form;