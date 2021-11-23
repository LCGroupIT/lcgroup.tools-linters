# @lcgroup.tools/linters

ESlint rules for Angular applications.

## Setup

Install from npm

```bash
npm i @lcgroup.tools/linters --save-dev
````

### ESLint + Prettier

Include configurations:

``.eslintrc.js``

```javascript
module.exports = {
    extends: ['./node_modules/@lcgroup.tools/linters/eslint'],
};
```

``.prettierrc.js``

```javascript
module.exports = {
    ...require('./node_modules/@lcgroup.tools/linters/prettier/prettier.config.js'),
};
````

Add npm-script:

```json
"lint": "npx eslint --config ./.eslintrc.js --debug "src/**/*.{js,ts,html}"",
"lint:fix": "npx eslint --config ./.eslintrc.js --fix --debug "src/**/*.{js,ts,html}""
```

Add ``.eslintignore`` file

```text
dist
node_modules
coverage
*.less
*.css
```

### Stylelint

``.stylelintrc``

```json
{
    "extends": ["./node_modules/@lcgroup.tools/linters/stylelint/stylelint.config.json"],
}
```

Add npm-script:

```json
"lint": "npx stylelint --config ./.stylelintrc \"src/**/*.less\"",
"lint:fix": "npx stylelint --config ./.stylelintrc --fix \"src/**/*.less\""
```

#### VSCODE

> .vscode/settings.json

```json
"stylelint.validate": [
    "css",
    "less",
    "postcss",
    "scss"
],
```
