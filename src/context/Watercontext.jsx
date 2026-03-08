import { createContext, useContext, useEffect, useState } from "react";
import { saveUserSetting , getUserSetting, getDailySetting, saveDailySetting, saveWaterHistory } from "../utils/storage";
import { getNotificationPermission, saveNotificationPermission } from "../utils/storage"
export const UserWaterContext = createContext(null);
export const DailyWaterContext = createContext(null);
export const NotificationContext = createContext(null);

export function NotificationProvider({children}){
    const [permission,setPermission] = useState(() => {
        return getNotificationPermission() || false
    })

    useEffect(()=>{
        saveNotificationPermission(permission)
    },[permission])


    return (
        <NotificationContext.Provider value={{permission,setPermission}}>
            {children}
        </NotificationContext.Provider>
    )
}
//hook to use the notification context
export function useNotificationContext(){
    return useContext(NotificationContext)
}

export function UserWaterProvider({children}){

    //we made the usestate hook get the info from the local 
    // storage directly without waiting for the useeffect  
    // (which mean waiting for the rendering)
    const [userSetting , setUserSetting] = useState(() => {
        return getUserSetting() || 
        {dailyGoal:2000,
        reminderInterval:60,
        startTime:'09:00',
        endTime: '22:00'}
    });

    //updating the user setting and saving it to the local storage with each form change
    useEffect(() => {
        saveUserSetting(userSetting)
    }, [userSetting])

    //wrapped the children so we can use the state inside them
    return(
        <UserWaterContext.Provider value={{userSetting ,setUserSetting}}>
            {children}
        </UserWaterContext.Provider>
    )

}

//a function to handle daily data
export function DailyWaterProvider({children}){
    //use state gets it data from the localStorage directly
    const [dailySetting , setDailySetting] =  useState(() => {
        const saved = getDailySetting()
        if(saved){
            const isToday = saved.date === new Date().toLocaleDateString()
            if(isToday) return saved
            else {
                saveWaterHistory({
                    date: saved.date,
                    consumedAmount: saved.consumedAmount,
                    completed: saved.completed
                })
            }
        }
        return {
        date:new Date().toLocaleDateString(),
        consumedAmount:0,
        completed:false ,
        history:[]
        }
    })

    //saving the daily data whenever it change
    useEffect( () => {
        saveDailySetting(dailySetting);
    } , [dailySetting])

    //wrapped the children so we can use the state inside them
    return(
        <DailyWaterContext.Provider value={{dailySetting,setDailySetting}}>
            {children}
        </DailyWaterContext.Provider>
    )
}


//
export function useUserWater(){
    return useContext(UserWaterContext)
}

export function useDailyWater(){
    return useContext(DailyWaterContext)
}


