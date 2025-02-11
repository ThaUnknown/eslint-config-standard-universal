import config from '../index.js'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  ...config(),
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
        projectService: {
          allowDefaultProject: []
        }
      }
    }
  }
)
