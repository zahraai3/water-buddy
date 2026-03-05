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


