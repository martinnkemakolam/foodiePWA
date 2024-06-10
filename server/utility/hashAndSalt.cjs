module.exports =(password)=>{
        let salt = `swc`
        let hash
        for (let index = 0; index < password.length; index++) {
            if (index % 2 === 0) {
                hash = hash + password[index] + 'cwx';  
            }
            hash = hash + password[index];
        }
        console.log(salt + hash + salt + hash)
        return salt + hash + salt + hash
    }