import { useEffect } from "react"
import { useNotificationContext } from "../context/Watercontext"
import { useUserWater } from "../context/Watercontext"

export function useRequestNotificationPermission() {
    const {permission , setPermission} = useNotificationContext()

    const requestPermissionNotification = () => {
        Notification.requestPermission()
            .then(result => {
                if(result === "granted"){
                    setPermission(true)
                }else{
                    setPermission(false)
                }
            })
    }
    return requestPermissionNotification
}

export function useNotificationScheduler(){
    const {permission} = useNotificationContext()
    const {userSetting} = useUserWater()

    useEffect(() =>{
        if(!permission) return

        const interval = setInterval(() => {
            const now = new Date()
            const currentTime = now.getHours() * 60 + now.getMinutes()

            const [startH , startM] = userSetting.startTime.split(":").map(Number)
            const [endH , endM] = userSetting.endTime.split(":").map(Number)
            const startMinutes = startH * 60 + startM
            const endMinutes = endH * 60 + endM

            if(currentTime >= startMinutes && currentTime <= endMinutes){
                new Notification("Time to drink water!", {
                    body: "Stay hydrated and take a sip of water now!"
                })
            }
        },userSetting.reminderInterval * 60 * 1000)
    
        return () => clearInterval(interval)

    },[permission , userSetting])
}

