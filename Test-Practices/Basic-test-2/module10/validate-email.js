function validateEmail(email){
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // return emailRegex.test(email)

    //Without regEx

    if(email.indexOf('@') === -1){
        return false;
    }
    
    //Put the into the local part

    const [localPart, domain] = email.split('@')

    if(localPart.length === 0 || domain.length < 3){
        return false
    }
    const domainExtension = domain.split('.')
    if(domainExtension.length < 2 || domainExtension[1] < 2){
        return false;
    }

    return true;
}

module.exports = validateEmail;