import jwt from "jsonwebtoken";

const authorize = (req, res, next) => {

   try {
      const token = req.header.authorization;
      console.log(token)
      if (!token) {
         return res.status(401).json({ message: 'Token is required' });
      }

   const splitToken = token.split(" ");
      if (splitToken.lenght !== 2) {
         return res.status(400).json({ error: "Bearer token is malformed"})
      }

   const newToken = splitBearerToken[1];

   const payload = jwt.verify(newToken, process.env.JWT_KEY);
      req.decoded = payload
      console.log(payload);
      next();

   } catch (error) {
      res.sendStatus(401).json({ message: 'Invalid token' });
   };
   
};


// const bearerTokenString = req.headers.authorization
// console.log(bearerTokenString)
// const splitBearerToken = bearerTokenString.split(' ')
// const token = splitBearerToken[1]

// try {
//   const payload = jwt.verify(token, JWT_KEY)
//   req.decoded = payload
//   console.log(payload)
//   next()
// } catch (error) {
//   res.sendStatus(401)
// }
