let output = undefined

if (typeof window !== 'undefined') {
	console.log('good')
	output = require('./p5.speech.js')
} else {
	console.log('bad')
}
export default output