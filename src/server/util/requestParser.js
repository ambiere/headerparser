module.exports = function requestParser(req) {
  const id = req.id;
  const ipAddress = req.ip;
  const languages = req.headers["accept-language"];
  const userAgent = req.headers["user-agent"];

  return {
    id,
    ipAddress,
    languages,
    userAgent,
  };
};
