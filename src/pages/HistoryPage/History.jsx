import React from 'react'
import { getWaterHistory } from '../../utils/storage'

function History() {

    
    return (
        <div>
        <h1>Histoorryyyyyy</h1>
        <button onClick={() => console.log(getWaterHistory())}> History </button>
        </div>
    )
}

export default History
