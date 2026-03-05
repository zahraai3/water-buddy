import React from 'react'
import { getWaterHistory } from '../../utils/storage'

function History() {

    const historyElements = () => {
        const history = getWaterHistory() || []
        return history.length === 0 ? <p>No History Yet</p> : history.map((item,index) => {
            return(
                <div key={index}>
                    <h2>Day : {item.date}</h2>
                    <h3>Consumed Amount : {item.consumedAmount}</h3>
                    <h3>Completed : {item.completed ? "True" : "False"}</h3>
                </div>
            )
        })
    }
    return (
        <div>
        {historyElements()}
        </div>
    )
}

export default History
