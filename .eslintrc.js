module.exports = {
  root: true,
  extends: [
    "next/core-web-vitals", // Next.js rules
    "plugin:tailwindcss/recommended", // TailwindCSS rules
    "prettier", // Prettier integration
  ],
  plugins: ["import", "tailwindcss"],
  rules: {
    quotes: ["error", "double"], // Enforce double quotes
    "jsx-quotes": ["error", "prefer-double"], // Enforce double quotes in JSX
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          ["parent", "sibling"],
          "index",
        ],
        "newlines-between": "always",
        pathGroups: [
          {
            pattern: "@app/**",
            group: "external",
            position: "after",
          },
        ],
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
    "tailwindcss/classnames-order": "warn",
    "tailwindcss/no-custom-classname": "off",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "no-undef": "off",
      },
    },
  ],
};
