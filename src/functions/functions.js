
/* -- Return random number, min and max included -- */
module.exports.randomIntFromInterval = (min, max) => {          
    return Math.floor(Math.random() * (max - min + 1) + min)
} 


/* -- Return random DNI -- */
const validDNILetter = ( dniNumber ) => {
    const {NIF_LETTERS} = require('../constants/constants')
    return NIF_LETTERS.charAt( dniNumber % 23 )
  };


module.exports.dniGenerator = () => {
    let dni = ""
    for (let i=0; i<8; i++){
        dni += (Math.floor(Math.random() * 10))  
    }

    dni += validDNILetter(dni)
    return dni.toString()
} 

/* -- Return random phone number -- */
module.exports.randomPhoneNumber = () => {
    let phoneNum ="6"
    for (let i=0; i<8; i++){
        phoneNum += (Math.floor(Math.random() * 10))  
    }
    phoneNum.toString()
    return phoneNum
};

module.exports.randomEmailDomain = () => {
    const {EMAIL_DOMAIN} = require('../constants/constants')
    return EMAIL_DOMAIN[Math.floor(Math.random() * (EMAIL_DOMAIN.length + 1))]
  };