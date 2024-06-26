import jwt from "jsonwebtoken";

const authorize = (req, res, next) => {

   try {
      const token = req.headers.authorization;
      console.log(token)
      if (!token) {
         return res.status(401).json({ message: 'Token is required' });
      }

   const splitToken = token.split(" ");
      if (splitToken.length !== 2) {
         return res.status(400).json({ error: "Bearer token is malformed"})
   }

   const newToken = splitToken[1];

   const payload = jwt.verify(newToken, process.env.JWT_KEY);
      req.decoded = payload
      console.log(payload);
      next();

   } catch (error) {
      res.sendStatus(401).json({ message: 'Invalid token' });
   };
   
};

export default authorize;



