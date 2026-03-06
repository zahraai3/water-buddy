import React from 'react'
import { useUserWater , useDailyWater } from '../../context/Watercontext'
import { saveDailySetting } from '../../utils/storage'
import './Dashboard.css'
import water from '../../assets/water.png'
import image from '../../assets/water.png'
import Header from '../../components/Header/Header'

function Dashboard() {

    const {userSetting} = useUserWater()
    const {dailySetting , setDailySetting} = useDailyWater()

    const progress = Math.min(
        (dailySetting.consumedAmount / userSetting.dailyGoal) * 100,
        100
    )

    function handleDrink(){

        setDailySetting(prev => {

            if(prev.consumedAmount >= userSetting.dailyGoal){
                return prev
            }

            const newAmount = prev.consumedAmount + 250

            return {
                ...prev,
                consumedAmount:newAmount,
                completed:newAmount >= userSetting.dailyGoal
            }
        })
    }

    return (
        <div className="dashboard-container">
                <div className="water-info">
                    <div className="waterimg">
                        <img src={image} alt="water drop"/>
                    </div>
                    <div className="water-details">
                        <div className="completed">
                            <label class="container">
                                <input checked={dailySetting.completed ? "checked" : ""} type="checkbox"/>
                                <div class="checkmark"></div>
                            </label>
                            <h2 className='check-name'>completed</h2>
                        </div>
                        <div className="prograss-bar">
                            <h2>
                                Your Daily Goal is : {userSetting.dailyGoal} ml
                            </h2>
                            <h2>
                                Your Progress is : {progress}%
                            </h2>
                        </div>
                        <div className="add-water-btn">
                            <button className='learn-more' onClick={handleDrink}>Drink Another Cup of Water</button>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default Dashboard

{/* <div>
        <h1>Daily Goal : {userSetting.dailyGoal}</h1>
        <h1>consumed amount : {dailySetting.consumedAmount}</h1>
        <h2>prograss bar : {(dailySetting.consumedAmount / userSetting.dailyGoal) * 100}%</h2>
        {dailySetting.completed ? <h3>Completedddd!!!!!!</h3> : ""}
        <button onClick={handleDrink}>Drinked water (add +250ml)</button>
        </div> */}
