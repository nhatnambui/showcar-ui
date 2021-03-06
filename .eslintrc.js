module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true,
        "worker": true,
        "mocha": true,
        "jasmine": true,
        "jquery": true,
        "serviceworker": true
    },
    "globals": {
        "expect": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            4,
            { "SwitchCase": 1 }
        ],
        "quotes": [
            "error",
            "single",
            { "allowTemplateLiterals": true }
        ],
        "no-console": [
            "error",
            { allow: ["log","warn", "error"] }
        ],
        "semi": [
            "error",
            "always"
        ],
        "compat/compat": 2
    },
    "plugins": ["compat"]
};
