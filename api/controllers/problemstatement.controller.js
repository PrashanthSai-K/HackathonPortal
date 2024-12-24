const sequelize = require('../config/database');

exports.getStatements = async(req, res)=>{
    try {
        const [result, metadata] = await sequelize.query("SELECT * FROM problem_statements");        
        res.status(200).send({data:result}); 
    } catch (error) {
        console.log(error);
        res.status(500).send({error:"some internal error"});
    }
}