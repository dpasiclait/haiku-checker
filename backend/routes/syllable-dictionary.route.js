const express = require('express');

const SyllableDictionaryController = require('../controllers/syllable-dictionary.controller');
const router = express.Router();

router.get('/', SyllableDictionaryController.findSyllables)

router.get('/upload_data', SyllableDictionaryController.writeSyllableDictionary)

module.exports = router;
