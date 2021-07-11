const express = require('express');

const SyllableDictionaryController = require('../controllers/syllable-dictionary.controller');
const router                       = express.Router();

router.get('/upload_data', SyllableDictionaryController.uploadSyllablesToDictionary);

/**
 * @swagger
 * /api/syllable_dictionary/:
 *   post:
 *     summary: Verifies the syllable count of a haiku
 *     description: This service receives an input object with three verses to count the syllables of each line
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstVerse:
 *                 type: string
 *                 example: "This is the first line"
 *               secondVerse:
 *                 type: string
 *                 example: "Followed by the second line"
 *               thirdVerse:
 *                 type: string
 *                 example: "With the third to end"
 *     responses:
 *       '200':
 *         description: Successfully returns the three verses' syllable count and a list of all unknown words
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 payload:
 *                   type: object
 *                   properties:
 *                     firstVerseCount:
 *                       type: number
 *                       example: 5
 *                     secondVerseCount:
 *                       type: number
 *                       example: 7
 *                     thirdVerseCount:
 *                       type: number
 *                       example: 5
 *                     unknownWords:
 *                       type: array
 *                       example: ['unknown_word1', 'unknown_word2']
 *                 timestamp:
 *                  type: number
 *                  example: 1626026131764
 *       '400':
 *         description: One verse was empty upon reception
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 payload:
 *                   type: string
 *                   example: "At least one verse is missing"
 *                 timestamp:
 *                   type: number
 *                   example: 1626026131764
 *       '500':
 *         description: Internal Server Error
*/
router.post('/', SyllableDictionaryController.verifyHaiku);

module.exports = router;

