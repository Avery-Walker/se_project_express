const { JWT_SECRET = "super-strong-secret", NODE_ENV } = process.env;

module.exports = {
  JWT_SECRET,
  NODE_ENV,
};
