module.exports.randomIntFromInterval = (min, max) => {          //Return random number, min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
} 



