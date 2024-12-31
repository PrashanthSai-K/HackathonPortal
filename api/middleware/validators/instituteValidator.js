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
        .isLength({ min: 10, max: 10 })
        .withMessage('POC phone must be 10 digits.')
        .isNumeric()
        .withMessage('POC phone must be a number.'),
    body('password')
        .isLength({ min: 8 })
        .withMessage('Password must be at least 8 characters long.'),
        
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
    }
];

// Validation Handler Middleware
// const handleValidation = 

module.exports = {
    validateInstituteData,
    // handleValidation,
};