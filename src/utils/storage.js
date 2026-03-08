export function saveUserSetting(userWaterSettings){
    localStorage.setItem("userWaterSetting",JSON.stringify(userWaterSettings))
}

export function getUserSetting(){
    try{
        const data = localStorage.getItem("userWaterSetting")
        return data ? JSON.parse(data) : null
    } catch {
        return null
    }
}

export function saveDailySetting(dailySetting){
    localStorage.setItem("dailyWaterSetting",JSON.stringify(dailySetting))
}

export function getDailySetting(){
    //localStorage.getItem() لما ما يلاقي شي يرجع null، وأنت تمرر null لـ JSON.parse():
    try {
        const data = localStorage.getItem("dailyWaterSetting")
        return data ?  JSON.parse(data) : null
    } catch (error) {
        return null
    }
        
}

export function saveWaterHistory(newDay){
    const history = JSON.parse(localStorage.getItem("waterHistory")) || [];
    const alreadyExistDay = history.some(day => day.date === newDay.date)

    if(!alreadyExistDay) {
        history.push(newDay)
        localStorage.setItem("waterHistory" , JSON.stringify(history))
    } 
}

export function getWaterHistory(){
    try{
        const data =  localStorage.getItem("waterHistory")
        return data ? JSON.parse(data) : [];
    }catch{
        return null
    }
}

export function saveNotificationPermission(permission){
    const permissionData = JSON.parse(localStorage.getItem("notificationPermission")) 
    const parsed = permissionData !== null ? JSON.parse(permissionData) : null
    if(parsed !== permission){
        localStorage.setItem("notificationPermission", JSON.stringify(permission))
    }
}

export function getNotificationPermission(){
    try{
        const data = JSON.parse(localStorage.getItem("notificationPermission"))
        return data ?? false
    }catch(error){
        console.error("Error reading notificationPermission:", error)
        return false
    }
}

