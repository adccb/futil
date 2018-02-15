module.exports = {
    "parser": "babel-eslint",
    "plugins": [
      "flowtype"
    ],
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "parserOptions": {
      "sourceType": "module"
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [ "error", 2 ],
        "linebreak-style": [ "error", "unix" ],
        "quotes": [ "error", "single" ],
        "semi": [ "error", "never" ],
        "array-bracket-spacing": [ "error", "always" ]
    }
};
