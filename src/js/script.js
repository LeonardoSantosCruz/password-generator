
const start = ()=>{
    let size= + document.getElementById('charNum').value
    let newPassword = '';
    let character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789' ;
    
    console.log(size)

    
    const generateRandomPassword=  (size) =>{
        
        for (let i=0;i<size;i++){
            newPassword += character.charAt(Math.floor(Math.random()*character.length));
        }
         return newPassword
         
    }
    const addRow = ()=>{
        document.getElementById('newPass').value = newPassword
    }
    generateRandomPassword(size)
    addRow()
    
    console.log(newPassword)
}

// console.log(generateRandomPassword())
