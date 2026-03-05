import React from 'react'
import { useUserWater , useDailyWater } from '../../context/Watercontext'
import { saveDailySetting } from '../../utils/storage'

function Dashboard() {

    const {userSetting} = useUserWater()
    const {dailySetting , setDailySetting} = useDailyWater()

    function handleDrink(){
        const newAmount = dailySetting.consumedAmount + 250 
        setDailySetting(prev => {
                if(prev.consumedAmount >= userSetting.dailyGoal){
                    return prev
                }
                const newAmount = dailySetting.consumedAmount + 250

                return {
                    ...prev,
                    consumedAmount:newAmount,
                    completed:newAmount >= userSetting.dailyGoal
                }
            }
        )
    }

    return (
        <div>
        <h1>Daily Goal : {userSetting.dailyGoal}</h1>
        <h1>consumed amount : {dailySetting.consumedAmount}</h1>
        <h2>prograss bar : {(dailySetting.consumedAmount / userSetting.dailyGoal) * 100}%</h2>
        {dailySetting.completed ? <h3>Completedddd!!!!!!</h3> : ""}
        <button onClick={handleDrink}>Drinked water (add +250ml)</button>
        </div>
    )
}

export default Dashboard
