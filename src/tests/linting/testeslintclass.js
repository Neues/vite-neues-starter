import eslintPluginReactCompiler from 'eslint-plugin-react-compiler';

(async function main() {
	console.log(eslintPluginReactCompiler);
})().catch((error) => {
	process.exitCode = 1;
	console.error(error);
});
