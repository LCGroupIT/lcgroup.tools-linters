# @lcgroup.tools/linters
ESlint rules for Angular applications.

## Setup
Install from npm
````
npm i @lcgroup.tools/linters --save-dev
````

### ESLint + Prettier
Include configurations:

``.eslintrc.js``
````
module.exports = {
    extends: ['./node_modules/@lcgroup.tools/linters/eslint'],
};
````

``.prettierrc.js``
````
module.exports = {
    ...require('./node_modules/@lcgroup.tools/linters/prettier/prettier.config.js'),
};
````
Add npm-script:
```
"lint": "npx eslint --config ./.eslintrc.js --debug "src/**/*.{js,ts,html}"",
"lint:fix": "npx eslint --config ./.eslintrc.js --fix --debug "src/**/*.{js,ts,html}""
```

Add ``.eslintignore`` file
```
dist
node_modules
coverage
*.less
*.css
```

### Stylelint
``.stylelintrc``
```
{
    "extends": ["./node_modules/@lcgroup.tools/linters/stylelint/stylelint.config.json"],
}
```
Add npm-script:
```
"lint": "npx stylelint --config ./.stylelintrc \"src/**/*.less\"",
"lint:fix": "npx stylelint --config ./.stylelintrc --fix \"src/**/*.less\""
```
