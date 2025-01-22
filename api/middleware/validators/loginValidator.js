const { body, validationResult } = require('express-validator');

const validateLogin = [
  body('username')
    .trim()
    .notEmpty()
    .withMessage('Username is required')
    .isLength({ min: 3 })
    .withMessage('Username must be at least 3 characters long'),

  body('password')
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),

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

const validateResetPassword = [
  // Validate resetToken
  body('resetToken')
    .notEmpty()
    .withMessage('Reset token is required'),
  // Validate newPassword
  body('newPassword')
    .notEmpty()
    .withMessage('New password is required')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long')
    .trim(),

  // Validate confirmPassword and check if it matches newPassword
  body('confirmPassword')
    .notEmpty()
    .withMessage('Confirm password is required')
    .custom((value, { req }) => value === req.body.newPassword)
    .withMessage('Confirm password does not match new password'),

  // Validation result middleware
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


module.exports = {validateLogin , validateResetPassword} ;