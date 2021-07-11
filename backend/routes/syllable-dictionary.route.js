const express = require('express');

const SyllableDictionaryController = require('../controllers/syllable-dictionary.controller');
const router                       = express.Router();

/**
 * @swagger
 *   components:
 *     schemas:
 *       Haiku:
 *         type: object
 *         required:
 *           - firstVerse
 *           - secondVerse
 *           - thirdVerse
 *         properties:
 *           firstVerse:
 *             type: string
 *             description: The first verse of the haiku
 *           secondVerse:
 *             type: string
 *             description: The second verse of the haiku
 *           thirdVerse:
 *             type: string
 *             description: The third verse of the haiku
 *         example:
 *           firstVerse: "This is the first line"
 *           secondVerse: "Followed by the second line"
 *           thirdVerse: "With the third to end"
 */

/**
 * @swagger
 *   components:
 *     schemas:
 *       HaikuVerseCount:
 *         type: object
 *         required:
 *           - firstVerseCount
 *           - secondVerseCount
 *           - thirdVerseCount
 *           - unknownWords
 *         properties:
 *           firstVerseCount:
 *             type: number
 *             description: The amount of syllables present in the first verse
 *           secondVerseCount:
 *             type: number
 *             description: The amount of syllables present in the second verse
 *           thirdVerseCount:
 *             type: number
 *             description: The amount of syllables present in the third verse
 *           unknownWords:
 *             type: array
 *             description: A list of all the words that are not recognized by the function and do not have a syllable count at the moment
 *         example:
 *           firstVerseCount: 5
 *           secondVerseCount: 7
 *           thirdVerseCount: 5
 *           unknownWords: ["unknown1", "unknown2"]
 */

/**
 * @swagger
 *   tags:
 *     name: Haiku Verifier
 *     description: Services to verify a haiku
 */

router.get('/upload_data', SyllableDictionaryController.uploadSyllablesToDictionary);

/**
 * @swagger
 * /api/syllable_dictionary/:
 *   post:
 *     summary: Verifies the syllable count of a haiku
 *     description: This service receives an input object with three verses to count the syllables of each line
 *     tags: [Haiku Verifier]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Haiku'
 *     responses:
 *       '200':
 *         description: Successfully returns the three verses' syllable count and a list of all unknown words
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 payload:
 *                   $ref: '#/components/schemas/HaikuVerseCount'
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

