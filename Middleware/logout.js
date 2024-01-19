// Middleware để kiểm tra AccessToken và kiểm tra danh sách đen
async function authenticateToken (req, res, next) {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    if (!token) return res.sendStatus(401);
  
    // Kiểm tra xem AccessToken có trong danh sách đen hay không
    if (accessTokenBlacklist.has(token)) {
      return res.status(401).json({ message: 'AccessToken đã hết hạn hoặc không hợp lệ' });
    }
  
    jwt.verify(token, secretKey, (err, user) => {
      if (err) return res.status(403).json({ message: 'AccessToken đã hết hạn hoặc không hợp lệ' });
      req.user = user;
      next();
    });
  };

module.exports = {authenticateToken};
  