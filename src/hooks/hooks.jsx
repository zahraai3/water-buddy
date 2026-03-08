import { useEffect } from "react"
import { useNotificationContext } from "../context/Watercontext"

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

