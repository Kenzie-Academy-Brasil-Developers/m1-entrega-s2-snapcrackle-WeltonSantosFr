function snapCrackle(maxValue) {
    let resultStr = ""
    
    for(let i = 1; i <= maxValue; i++) {
        
        if(i % 2 !== 0 && i % 5 === 0) {
            resultStr = resultStr.concat(" SnapCrackle,")
        }
        else if (i % 5 === 0) {
            resultStr = resultStr.concat(" Crackle,")
        }
        else if(i % 2 !== 0) {
            resultStr = resultStr.concat( " Snap,")
        }
        else {
            resultStr = resultStr.concat( ` ${i},`)
        }
    }
    return resultStr
}

console.log(snapCrackle(20))