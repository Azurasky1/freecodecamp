module.exports = {
    "extends": "google",
    "env": {
      browser: true
    },
    "globals": {},
    "rules": {
      "no-eval": ["error", {"allowIndirect": false}],
      'max-len': [1, 150, 4, {
        ignoreComments: true,
        ignoreUrls: true
      }]
    }
};
