/*
 * @Author            : Burning
 * @Date              : 2018-12-01 17: 01: 45
 * @Last Modified by: Burning
 * @Last Modified time: 2018-12-03 15:28:05
 */

const mockData   = require('../../data');
      mockConfig = require('../../configure/config.json');

const mockMiddleware = (req, res, next) => {
  if (mockConfig.useMock && mockData[req.url]) {
    return res.json(mockData[req.url]);
  }
  return next();
};

module.exports = mockMiddleware;
