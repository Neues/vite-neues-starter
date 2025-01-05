export default {
    'src/*': 'eslint --cache src --report-unused-disable-directives --no-warn-ignored',
    'eslint.config.js': 'npx @eslint/config-inspector build'
}