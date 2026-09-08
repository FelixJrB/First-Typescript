import config from '@lnu/eslint-config'
import { tsRules } from '@lnu/eslint-config/ts'

export default [...config, ...tsRules]