module.exports = {
  extends: "stylelint-config-standard",
  customSyntax: 'postcss-less',
  rules: {
    "max-nesting-depth": 5,
    "selector-max-id": 3,
    "selector-class-pattern": "[A-z]+",
    "declaration-property-value-disallowed-list": null,
    "color-named": null,
    "property-no-unknown": null,
    "color-no-invalid-hex": null,
    "no-invalid-position-at-import-rule": null,
    "property-no-vendor-prefix": null,
    "selector-pseudo-class-no-unknown": [
      true,
      {
        "ignorePseudoClasses": ["global"]
      }
    ],
    "import-notation": "string",
  },
  ignoreFiles: [
    'build/**'
  ]
}
