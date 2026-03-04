import { createContext, useContext, useState } from "react";

export const UserWaterContext = createContext(null);
export const DailyWaterContext = createContext(null);


export function UserWaterProvider({children}){
    const [userSetting , setUserSetting] = useState({
        dailyGoal:2000,
        reminderInterval:60,
        startTime:'09:00',
        endTime: '11:00'
    });

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
