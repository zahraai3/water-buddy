export function saveUserSetting(userWaterSettings){
    localStorage.setItem("userWaterSetting",JSON.stringify(userWaterSettings))
}

export function getUserSetting(){
    const data = localStorage.getItem("userWaterSetting")
    return data ? JSON.parse(data) : null
}

export function saveDailySetting(dailySetting){
    localStorage.setItem("dailyWaterSetting",JSON.stringify(dailySetting))
}

export function getDailySetting(){
    const data = localStorage.getItem("dailyWaterSetting")
    return data ?  JSON.parse(data) : null
}

export function saveWaterHistory(newDay){
    const history = JSON.parse(localStorage.getItem("waterHistory")) || [];
    history.push(newDay)
    localStorage.setItem("waterHistory" , JSON.stringify(history))
}

export function getWaterHistory(){
    const data =  localStorage.getItem("waterHistory")
    return data ? JSON.parse(data) : [];
}


