const request = require('superagent');

const ApiRequest = {
  get: (url) => {
    return new Promise((resolve, reject) => {
      request
        .get(url)
        .end((err, res) => {
          if (err) {
            reject(err);
          } else {
            resolve(JSON.parse(res.text));
          }
        });
    });
  },
};

module.exports = ApiRequest;
