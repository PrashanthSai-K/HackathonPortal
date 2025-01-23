const { body, validationResult } = require('express-validator');

// Validation Rules Middleware
const validateInstituteData = [
    body('instituteCode').notEmpty().withMessage('Institute code is required.'),
    body('instituteName').notEmpty().withMessage('Institute name is required.'),
    body('instituteAddress').notEmpty().withMessage('Institute address is required.'),
    body('instituteCity').notEmpty().withMessage('Institute city is required.'),
    body('instituteState').notEmpty().withMessage('Institute state is required.'),
    body('institutePincode')
        .isLength({ min: 6, max: 6 })
        .withMessage('Institute pincode must be 6 digits.')
        .isNumeric()
        .withMessage('Institute pincode must be a number.'),
    body('instituteType').notEmpty().withMessage('Institute type is required.'),
    body('pocName').notEmpty().withMessage('POC name is required.'),
    body('pocEmail')
        .isEmail()
        .withMessage('POC email must be a valid email address.'),
    body('pocPhone')
        .notEmpty()
        .withMessage('Point of Contact (POC) number is required.')
        .isMobilePhone('any')
        .withMessage('POC number must be a valid mobile number.'),
    body('password')
        .isLength({ min: 8 })
        .withMessage('Password must be at least 8 characters long.'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors);

            return res.status(400).json({
                status: 'error',
                errors: errors.array().map(err => ({
                    field: err.param,
                    message: err.msg,
                })),
            });
        }
        next();
    }
];


const validateInstituteUpdateData = [
    body('id')
        .isNumeric()
        .withMessage('ID must be a number if provided.'),
    body('institution_code')
        .notEmpty()
        .withMessage('Institution code is required.'),
    body('institution_name')
        .notEmpty()
        .withMessage('Institution name is required.'),
    body('institution_type')
        .notEmpty()
        .withMessage('Institution type is required.'),
    body('address')
        .notEmpty()
        .withMessage('Address is required.'),
    body('city')
        .notEmpty()
        .withMessage('City is required.'),
    body('state')
        .notEmpty()
        .withMessage('State is required.'),
    body('pincode')
        .isLength({ min: 6, max: 6 })
        .withMessage('Pincode must be exactly 6 digits.')
        .isNumeric()
        .withMessage('Pincode must be a number.'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                status: 'error',
                errors: errors.array().map((err) => ({
                    field: err.param,
                    message: err.msg,
                })),
            });
        }
        next();
    },
];

const validateInstituteDataAdmin = [
    body('instituteCode').notEmpty().withMessage('Institute code is required.'),
    body('instituteName').notEmpty().withMessage('Institute name is required.'),
    body('instituteAddress').notEmpty().withMessage('Institute address is required.'),
    body('instituteCity').notEmpty().withMessage('Institute city is required.'),
    body('instituteState').notEmpty().withMessage('Institute state is required.'),
    body('institutePincode')
        .isLength({ min: 6, max: 6 })
        .withMessage('Institute pincode must be 6 digits.')
        .isNumeric()
        .withMessage('Institute pincode must be a number.'),
    body('instituteType').notEmpty().withMessage('Institute type is required.'),
    body('pocName').notEmpty().withMessage('POC name is required.'),
    body('pocEmail')
        .isEmail()
        .withMessage('POC email must be a valid email address.'),
    body('pocPhone')
        .notEmpty()
        .withMessage('Point of Contact (POC) number is required.')
        .isMobilePhone('any')
        .withMessage('POC number must be a valid mobile number.'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors);

            return res.status(400).json({
                status: 'error',
                errors: errors.array().map(err => ({
                    field: err.param,
                    message: err.msg,
                })),
            });
        }
        next();
    }
];

const validateUpdateInstitutionDataAdmin = [
    body('id')
        .isNumeric()
        .withMessage('ID must be a number if provided.'),
    body('institution_code')
        .notEmpty()
        .withMessage('Institution code is required.'),
    body('institution_name')
        .notEmpty()
        .withMessage('Institution name is required.'),
    body('institution_type')
        .notEmpty()
        .withMessage('Institution type is required.'),
    body('address')
        .notEmpty()
        .withMessage('Address is required.'),
    body('city')
        .notEmpty()
        .withMessage('City is required.'),
    body('state')
        .notEmpty()
        .withMessage('State is required.'),
    body('pincode')
        .isLength({ min: 6, max: 6 })
        .withMessage('Pincode must be exactly 6 digits.')
        .isNumeric()
        .withMessage('Pincode must be a number.'),

    body('poc_name')
        .notEmpty()
        .withMessage('Point of Contact (POC) name is required.')
        .isString()
        .withMessage('POC name must be a string.'),

    body('poc_email')
        .notEmpty()
        .withMessage('Point of Contact (POC) email is required.')
        .isEmail()
        .withMessage('POC email must be a valid email address.'),

    body('poc_number')
        .notEmpty()
        .withMessage('Point of Contact (POC) number is required.')
        .isMobilePhone('any')
        .withMessage('POC number must be a valid mobile number.'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                status: 'error',
                errors: errors.array().map(err => ({
                    field: err.param,
                    message: err.msg,
                })),
            });
        }
        next();
    },
];

module.exports = {
    validateInstituteData,
    validateInstituteDataAdmin,
    validateInstituteUpdateData,
    validateUpdateInstitutionDataAdmin
};