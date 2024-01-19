async function logout(req, res, next) {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
  accessTokenBlacklist.add(token);
  res.json({ success: true, message: 'Đăng xuất thành công' });
}

module.exports = {
    logout,
};