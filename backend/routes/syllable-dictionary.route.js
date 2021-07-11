const express = require('express');

const SyllableDictionaryController = require('../controllers/syllable-dictionary.controller');
const router                       = express.Router();

// TODO: ADD SWAGGER UI
/**
 * @swagger
 * /api/syllable_dictionary/upload_data:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users
 *     description: Yolo
 *     responses:
 *       '200':
 *          description: Yolo
*/
router.get('/upload_data', SyllableDictionaryController.uploadSyllablesToDictionary);

/**
 * @swagger
 * /api/syllable_dictionary/:
 *   post:
 *     summary: Retrieve a list of JSONPlaceholder users
 *     description: Yolo
 *     responses:
 *       '200':
 *         description: Yolo
*/
router.post('/', SyllableDictionaryController.verifyHaiku);

module.exports = router;

