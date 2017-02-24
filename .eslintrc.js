module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "class-methods-use-this": [
      "off"
    ],
    "comma-dangle": [
      "off"
    ],
    "import/no-extraneous-dependencies": [
      "off"
    ],
    "no-restricted-syntax": [
      "off"
    ],
    "no-underscore-dangle": [
      "off"
    ],
    "no-use-before-define": [
      "off"
    ],
    "react/forbid-prop-types": [
      "off"
    ]
  },
  "globals": {
    "$": true
  }
};
