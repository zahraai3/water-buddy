import { createContext, useContext, useEffect, useState } from "react";
import { saveUserSetting , getUserSetting, getDailySetting, saveDailySetting, saveWaterHistory } from "../utils/storage";

export const UserWaterContext = createContext(null);
export const DailyWaterContext = createContext(null);


export function UserWaterProvider({children}){
    const [userSetting , setUserSetting] = useState({
        dailyGoal:2000,
        reminderInterval:60,
        startTime:'09:00',
        endTime: '11:00'
    });

    //saving data to the local storage
    useEffect( () => {
    const savedSetting = getUserSetting();
    if (savedSetting) {
        setUserSetting(savedSetting)
    }
    }, [])

    useEffect(() => {
        saveUserSetting(userSetting)
    }, [userSetting])

    return(
        <UserWaterContext.Provider value={{userSetting ,setUserSetting}}>
            {children}
        </UserWaterContext.Provider>
    )
}

export function DailyWaterProvider({children}){
    const [dailySetting , setDailySetting] =  useState({
        date:new Date().toLocaleDateString(),
        consumedAmount:0,
        completed:false ,
        history:[]
    })

    //here it meant to check if the history of yesterday is saved or not to update it
    useEffect( () => {
        const savedSetting = getDailySetting();
        if (savedSetting){
            const isToday = savedSetting.date === new Date().toLocaleDateString()
            if(isToday){
                setDailySetting(savedSetting)
            } else {
                saveWaterHistory(savedSetting)
            }
        }
    } ,[])

    useEffect( () => {
        saveDailySetting(dailySetting);
    } , [dailySetting])

    return(
        <DailyWaterContext.Provider value={{dailySetting,setDailySetting}}>
            {children}
        </DailyWaterContext.Provider>
    )
}

export function useUserWater(){
    return useContext(UserWaterContext)
}

export function useDailyWater(){
    return useContext(DailyWaterContext)
}


