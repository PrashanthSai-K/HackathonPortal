const { body, validationResult } = require('express-validator');

const validateEventData = [
    body('eventDate')
        .notEmpty()
        .withMessage('Event date is required.')
        .isISO8601()
        .withMessage('Event date must be a valid ISO 8601 date (YYYY-MM-DD).'),

    body('eventVenue')
        .notEmpty()
        .withMessage('Event venue is required.')
        .isString()
        .withMessage('Event venue must be a string.')
        .isLength({ max: 50 })
        .withMessage('Event venue must not exceed 50 characters.'),

    body('finalRoundDate')
        .notEmpty()
        .withMessage('Final Round Date is required.')
        .isISO8601()
        .withMessage('Final round date must be a valid ISO 8601 date (YYYY-MM-DD).'),

    body('resultsDate')
        .notEmpty()
        .withMessage('Results date is required.')
        .isISO8601()
        .withMessage('Results date must be a valid ISO 8601 date (YYYY-MM-DD).'),

    body('prizeMoney')
        .notEmpty()
        .withMessage('Prize money is required.')
        .isString()
        .withMessage('Prize money must be a string.'),

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

module.exports = validateEventData;
