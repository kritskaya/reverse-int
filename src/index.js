module.exports = function reverse (n) {
	let str = "";
	let strNumber = Math.abs(n).toString();

	for(let i = 0; i < strNumber.length; i++) {
		str += strNumber[strNumber.length - 1 - i];
	}
	return +str;
}
