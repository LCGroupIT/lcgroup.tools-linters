const postcssScss = require('postcss-scss');
const postcssLess = require('postcss-less');

module.exports = {
    plugins: ["stylelint-prettier", "stylelint-order", "stylelint-scss"],
    extends: ["stylelint-config-standard", "stylelint-prettier/recommended"],
    ignoreFiles: ["!**/*.less","!**/*.css", "!**/*.scss"],
    rules: {
        "prettier/prettier": true,
        "indentation": null,
        "max-nesting-depth": 3,
        "at-rule-name-space-after": "always",
        "block-opening-brace-newline-after": "always",
        "color-named": "never",
        "declaration-block-no-redundant-longhand-properties": null,
        "declaration-empty-line-before": "never",
        "max-empty-lines": 2,
        "no-descending-specificity": null,
        "no-duplicate-selectors": true,
        "rule-empty-line-before": [
            "always",
            {
                "except": ["first-nested"],
                "ignore": ["after-comment"]
            }
        ],
        "selector-attribute-quotes": "always",
        "selector-max-specificity": "0,5,0",
        "selector-pseudo-element-colon-notation": "single",
        "selector-pseudo-element-no-unknown": [true, {
            "ignorePseudoElements": ["ng-deep"]
        }],
        "order/order": [
            "at-variables",
            "less-mixins",
            "custom-properties",
            "declarations",
            {
                "type": "at-rule",
                "name": "media"
            },
            {
                "type": "rule",
                "selector": "^&:\\w"
            }
        ],
        "order/properties-order": [
            [
                "position",
                "content",
                {
                    "order": "flexible",
                    "properties": ["top", "left", "right", "bottom"]
                },
                "z-index",
                "display",
                "width",
                "height"
            ],
            {
                "unspecified": "bottom"
            }
        ],
        "scss/at-rule-no-unknown": true
    },
    overrides: [
        {
            files: ["**/*.less"],
            customSyntax: postcssLess
        },
        {
            files: ["**/*.scss"],
            customSyntax: postcssScss
        }
    ]
}

