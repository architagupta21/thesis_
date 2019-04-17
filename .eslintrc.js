module.exports = {
    "extends": [
        "airbnb",
        "prettier",
        "prettier/react",
    //    "jest/recommended"
    ],
    "plugins": [
        "jest",
        "react",
        "jsx-a11y",
        "import",
        "prettier"
    ],
    "env":{
        "jest": true,
        "browser": true,
        "jest/globals": true
    },
    "rules": {
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/forbid-prop-types": [0],
        "react/prop-types":[0],
        "no-unused-vars":[1],
        "linebreak-style":[0],
        "prettier/prettier": [
            "error",
            {
                "trailingComma":"es5",
                "singleQuote": true,
                "printWidth": 80,
                "tabWidth":4
            }
        ],
        "no-shadow": "off",
        "no-console": "off",
        
    },
    
    "globals": {
        "$LTI":false,
        "$JWT_TOKEN":false,
        "sinon":false,
    }
};