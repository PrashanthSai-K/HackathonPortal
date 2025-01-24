const { body, validationResult } = require('express-validator');

const validateNotification = [
    body('title')
        .notEmpty()
        .withMessage('Title is required.')
        .isString()
        .withMessage('Title must be a string.')
        .isLength({ max: 100 })
        .withMessage('Title must not exceed 100 characters.'),

    body('description')
        .notEmpty()
        .withMessage('Description is required.')
        .isString()
        .withMessage('Description must be a string.')
        .isLength({ max: 500 })
        .withMessage('Description must not exceed 500 characters.'),

    body('type')
        .notEmpty()
        .withMessage('Event type is required.')
        .isString()
        .withMessage('Event type must be a string.')
        .isLength({ max: 50 })
        .withMessage('Event type must not exceed 50 characters.'),

    body('date')
        .notEmpty()
        .withMessage('Event date is required.')
        .isISO8601()
        .withMessage('Event date must be a valid ISO 8601 date (YYYY-MM-DD).'),

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



const validateNotificationUpdate = [
    body('id')
        .notEmpty()
        .withMessage("Id is required")
        .isNumeric()
        .withMessage("Id must be a number"),
        
    body('title')
        .notEmpty()
        .withMessage('Title is required.')
        .isString()
        .withMessage('Title must be a string.')
        .isLength({ max: 100 })
        .withMessage('Title must not exceed 100 characters.'),

    body('description')
        .notEmpty()
        .withMessage('Description is required.')
        .isString()
        .withMessage('Description must be a string.')
        .isLength({ max: 500 })
        .withMessage('Description must not exceed 500 characters.'),

    body('type')
        .notEmpty()
        .withMessage('Event type is required.')
        .isString()
        .withMessage('Event type must be a string.')
        .isLength({ max: 50 })
        .withMessage('Event type must not exceed 50 characters.'),

    body('date')
        .notEmpty()
        .withMessage('Event date is required.')
        .isISO8601()
        .withMessage('Event date must be a valid ISO 8601 date (YYYY-MM-DD).'),

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

module.exports = {validateNotification, validateNotificationUpdate};