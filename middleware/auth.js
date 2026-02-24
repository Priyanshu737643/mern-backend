import jwt from "jsonwebtoken";

const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(" ")[1];
    const user = jwt.verify(token, SECRET_KEY);
    
}

const authorize = (req,res,next) => {
    
}

export { authenticate, authorize };