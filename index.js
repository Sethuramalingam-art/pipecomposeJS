function revStr(str) {
	return str.split('').reverse().join('');
}

function uppercase(str) {
	return str.toUpperCase()
}

function subStr(str) {
	return str.substring(0,3);
}

//take a list of functions as an args and execution flow is left to right (reduce)
const pipe = (...fns) => (args) => {
	return fns.reduce((acc,cum)=> cum(acc) , args)
}

//take a list of functions as an args and execution flow is right to left (reduceRight)
const compose = (...fns) => (args) => {
	return fns.reduceRight((acc,cum)=> cum(acc) , args)
}
console.log(pipe(revStr, uppercase, subStr)('sethu'));

console.log(compose(revStr, uppercase, subStr)('sethu'));
