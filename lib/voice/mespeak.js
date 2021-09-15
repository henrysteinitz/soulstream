let output = undefined

if (typeof window !== 'undefined') {
	output = require('./mespeak/mespeak.js')
} 
export default output