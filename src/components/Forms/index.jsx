import React, {useState} from "react";
import './style.css'

const Form = () => {
    return(
        <form className="main-form">
            <div>
                <label>
                    <span>Data: </span>
                    <input 
                        type="date"
                        className="main-date"
                    />
                </label>
            </div>

            <div>
                <label>
                    <span>+/- Dias: </span>
                    <input 
                        type="number" 
                        className="number-input"
                    />
                </label>

                <label>
                    <span>+/- Meses: </span>
                    <input 
                        type="number" 
                        className="number-input"
                    />
                </label>

                <label>
                    <span>+/- Anos: </span>
                    <input 
                        type="number" 
                        className="number-input"
                    />
                </label>
            </div>
        </form>
    )
}

export default Form;