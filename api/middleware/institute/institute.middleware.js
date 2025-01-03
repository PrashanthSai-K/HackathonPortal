const bcrypt = require('bcrypt');

// Function to generate a random password
function generateRandomPassword(length = 8) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+";
    let password = "";
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}

// Function to bcrypt the generated password
exports.generateEncryptedPassword = async(length = 8 ) =>{
    try {
        const password = generateRandomPassword(length);
        const hashedPassword = await bcrypt.hash(password, 10);
        const res = await bcrypt.compare(password, hashedPassword);
        console.log("compare res: ", res);
        
        return [password, hashedPassword];
    } catch (error) {
        console.error('Error encrypting password:', error);
        throw error;
    }
}