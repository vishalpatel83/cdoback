import aad from "azure-ad-jwt";
const checkAuth = (req, res, next) => {
  const audience = process.env.BASE_URL_API;
  const authorization = req.headers.authorization;
  if (authorization) {
    var bearer = authorization.split(" ");
    var jwtToken = bearer[1];
    if (jwtToken) {
      aad.verify(jwtToken, null, function (err, result) {
        if (result) {
          next();
        } else {
          return res.status(401).json({ message: "Unauthorized" });
        }
      });
    } else {
      console.log("no token in header");
      res.status(401).json({ message: "no token in header" });
    }
  } else {
    console.log("no auth attr in header");
    res.status(401).json({ message: "no auth attr in header" });
  }
};
export default checkAuth;
