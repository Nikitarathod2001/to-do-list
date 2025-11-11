import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  try {

    const {token} = req.headers;

    if(!token) {
      return res.json({
        success: false,
        message: "Unauthorized User"
      });
    }

    const decode_token = await jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decode_token.id;
    req.username = decode_token.name;

    next();
    
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message
    });
  }
};

export default authUser;