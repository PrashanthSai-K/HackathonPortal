
const sequelize = require("../config/database")


exports.register_institute = async (req, res) => {
    try {
        const {
            instituteCode, 
            instituteName, 
            instituteAddress, 
            instituteCity, 
            instituteState, 
            institutePincode, 
            instituteType, 
            pocName, 
            pocEmail, 
            pocPhone, 
            password 
        } = req.body;

        const [ result, metadata ] = await sequelize.query(
            `INSERT INTO institution (institution_code, institution_name, institution_type, address, city, state, pincode, poc_name, poc_email, poc_number, password) 
             VALUES ( :institution_code, :institution_name, :institution_type, :address, :city, :state, :pincode, :poc_name, :poc_email, :poc_number, :password)`,
            {
                replacements : {
                    institution_code: instituteCode, institution_name: instituteName, institution_type: instituteType, address:instituteAddress, city:instituteCity, state:instituteState, pincode:institutePincode,  poc_name:pocName, poc_email:pocEmail, poc_number:pocPhone, password:password
                }
            }
        )

        res.send("Done");
    } catch (error) {
        console.log(error);
    }
}