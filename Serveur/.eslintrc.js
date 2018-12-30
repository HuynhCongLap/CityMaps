module.exports = {
    extends: "eslint:recommended",
    env : {
       "node": true,
       "browser": true,
       "es6": true,
       "amd": true
   },
   rules: {
        'no-console': 'off',
    },
    parserOptions: {
       "ecmaVersion": 6,
       "sourceType": "module",
       "ecmaFeatures": {
           "jsx": true
       }
   },

};
