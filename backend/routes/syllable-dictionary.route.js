const express = require('express');

const SyllableDictionaryController = require('../controllers/syllable-dictionary.controller');
const router = express.Router();

router.get('/upload_data', SyllableDictionaryController.uploadSyllablesToDictionary);

router.post('/', SyllableDictionaryController.verifyHaiku);

module.exports = router;
