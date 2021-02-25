exports.findSyllables = (req, res, next) => {
  const {
    firstLine,
    secondLine,
    thirdLine
  } = req.body;

  res.status(200).json({
    payload: 'Hello world',
    timestamp: Date.now()
  });
};
