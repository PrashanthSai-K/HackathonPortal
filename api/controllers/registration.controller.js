
const sequelize = require("../config/database")


exports.register_institute = async(req, res)=>{
    try {
        const [ result, metadata ] =  await sequelize.query("SELECT * FROM users")
        console.log(result);
        
res.send("hiii")
    } catch (error) {
        console.log(error);
    }
}