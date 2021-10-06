function logger(req, res, next) {
  const date = new Date();
  console.log(`
    REQUEST METHOD: ${req.method}
    REQUEST URL: ${req.originalUrl}
    TIMESTAMP: ${date.toLocaleString()}
  `);
  next();
}

const validateUserId = async (req, res, next) => {
  const { id } = req.params;
  const user = await Users.id;
  next();
};

function validateUser(req, res, next) {
  next();
}

function validatePost(req, res, next) {
  next();
}

// do not forget to expose these functions to other modules

module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePost,
};
