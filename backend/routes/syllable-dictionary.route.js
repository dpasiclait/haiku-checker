const express = require('express');

const SyllableDictionaryController = require('../controllers/syllable-dictionary.controller');
const router = express.Router();

router.get('/', SyllableDictionaryController.verifyHaiku)

router.get('/upload_data', SyllableDictionaryController.uploadSyllablesToDictionary)

module.exports = router;
