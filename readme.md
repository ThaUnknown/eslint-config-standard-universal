# eslint-config-standard-universal

ESLint configuration for Standard, works universally with JavaScript, TypeScript, Svelte, and more. For browsers, Node.js, and Deno.

## Example Usage

```js
// eslint.config.js
import config from 'eslint-config-standard-universal'
import tseslint from 'typescript-eslint'
import globals from 'globals'

export default tseslint.config(
  ...config(globals.node),
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname
      }
    },
  }
)
```

tsconfigRootDir is required for the svelte plugin. Globals are optional, as by default the config imports globals for browser, if you however want to override it with globals for NodeJS/Deno/Bun or other runtimes you can pass them as an argument.
