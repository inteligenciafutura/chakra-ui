// usamos `module.exports` en vez de `export default` ya que este archivo
// corre directo en Node.js y no pasa por Babel
module.exports = {
	exportPathMap() {
		return {
			'/': { page: '/' },
			'/about': { page: '/about' },
			'/progress': { page: '/progress' },
			'/spiner': { page: '/spiner' },
		}
	}
}