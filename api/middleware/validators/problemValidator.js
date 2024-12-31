const { body, validationResult } = require('express-validator');

// Validation middleware for createProblem
exports.validateCreateProblem = [
    body('psId')
        .isAlphanumeric()
        .withMessage('Problem Statement ID (psId) must be alphanumeric.')
        .notEmpty()
        .withMessage('Problem Statement ID (psId) is required.'),
    body('category')
        .isIn(['software', 'hardware'])
        .withMessage('Category must be either "software" or "hardware".'),
    body('title')
        .isLength({ min: 3 })
        .withMessage('Title must be at least 3 characters long.')
        .notEmpty()
        .withMessage('Title is required.'),
    body('description')
        .isLength({ min: 10 })
        .withMessage('Description must be at least 10 characters long.')
        .notEmpty()
        .withMessage('Description is required.'),
    body('organization')
        .notEmpty()
        .withMessage('Organization is required.')
        .isLength({ max: 100 })
        .withMessage('Organization must be less than 100 characters.'),
    // Middleware to handle validation errors
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


exports.validateBulkUpload = async (req, res, next) => {
    const rows = req.body; // Assuming bulk data is sent as an array in `problemStatements`

    if (!Array.isArray(rows) || rows.length === 0) {
        return res.status(400).json({
            status: 'error',
            message: 'Invalid or empty data for bulk upload.',
        });
    }

    const validationErrors = [];

    // Validate each row
    for (const [index, row] of rows.entries()) {
        req.body = row; // Temporarily set the row in `req.body` for validation
        await Promise.all(
            exports.validateCreateProblem.map((validation) => validation.run(req))
        );

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            validationErrors.push({
                row: index + 1, // Add 1 to make row indices user-friendly
                errors: errors.array().map((err) => ({
                    field: err.param,
                    message: err.msg,
                })),
            });
        }
    }

    if (validationErrors.length > 0) {
        return res.status(400).json({
            status: 'error',
            message: 'Validation errors occurred in the uploaded data.',
            errors: validationErrors,
        });
    }

    next();
};
