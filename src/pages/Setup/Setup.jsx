import './Setup.css'
import React from 'react'
import { useActionState } from 'react'
import { useUserWater } from '../../context/Watercontext'


function Setup() {
    const {userSetting , setUserSetting} = useUserWater();

    const [res, formFunc , isPending] = useActionState(
        async(prev , formData) => {
            const dailyGoal = formData.get("dailyGoal")
            const startTime = formData.get('startTime')
            const endTime = formData.get('endTime')
            const reminderInterval = formData.get('reminderInterval')

            const data = {
                dailyGoal:Number(dailyGoal),
                startTime,
                endTime,
                reminderInterval:Number(reminderInterval)
            }

            setUserSetting(data)
            return data
        },

        {
            userSetting
        }
    )


    return (
        <div className='setup-container'>
            <form className="form" action={formFunc}>
                <div className="title">
                    <h1>Heellooooo</h1>
                    <span>Take a sip of water and Customize Your Hydration.</span>
                </div>
                <label htmlFor="dailyGoal">Daily Goal (ml):</label>
                <input  className='input'  type="number" name='dailyGoal' defaultValue={userSetting.dailyGoal} step={100} min={1000} max={4000}/>
                <label htmlFor="startTime">Start Time:</label>
                <input  className='input' type="time" name='startTime' defaultValue={userSetting.startTime}/>
                <label htmlFor="endTime">End Time:</label>
                <input  className='input' type="time" name='endTime' defaultValue={userSetting.endTime}/>
                <label htmlFor="reminderInterval">Reminder Interval (minutes):</label>
                <input  className='input' type="number" name='reminderInterval' defaultValue={userSetting.reminderInterval} step={5} min={15} max={120}/>
                <button className="button-confirm">Let`s Start →</button>
            </form>
        </div>
    )
}

export default Setup
