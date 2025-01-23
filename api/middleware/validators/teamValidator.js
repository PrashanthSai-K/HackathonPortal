const { body, validationResult } = require('express-validator');

const validateTeamData = [
  body('institutionId')
    .notEmpty()
    .withMessage('Institution ID is required.')
    .isNumeric()
    .withMessage('Institution ID must be a number.'),
  
  body('teamName')
    .notEmpty()
    .withMessage('Team Name is required.')
    .isString()
    .withMessage('Team Name must be a string.'),
  
  body('participants')
    .notEmpty()
    .withMessage('Number of participants is required.')
    .isInt({ min: 1, max: 6})
    .withMessage('Participants must be at least 1 & at most 6.'),

  body('leaderName')
    .notEmpty()
    .withMessage('Leader Name is required.')
    .isString()
    .withMessage('Leader Name must be a string.'),
  
  body('leaderEmail')
    .notEmpty()
    .withMessage('Leader Email is required.')
    .isEmail()
    .withMessage('Leader Email must be a valid email address.'),

  body('psId')
    .notEmpty()
    .withMessage('Problem Statement ID (psId) is required.')
    .isAlphanumeric()
    .withMessage('Problem Statement ID (psId) must be alphanumeric.'),

  body('teamMembers')
    .optional() // Assuming this can be empty
    .isString()
    .withMessage('Team Members must be a string seperated with ",".'),
  
  body('docLink')
    .optional() // Assuming this can be empty
    .isURL()
    .withMessage('Document Link (docLink) must be a valid URL.'),

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

const validateVideoUploadData = [
  body('institution_id')
    .notEmpty()
    .withMessage('Institution ID is required.')
    .isNumeric()
    .withMessage('Institution ID must be a number.'),

  body('team_id')
    .notEmpty()
    .withMessage('Team ID is required.')
    .isNumeric()
    .withMessage('Team ID must be numeric.'),

  body('video_link')
    .isURL()
    .withMessage('Video Link must be a valid URL.'),

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


module.exports = {validateTeamData, validateVideoUploadData};
