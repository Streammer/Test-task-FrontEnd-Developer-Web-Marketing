function PrintFizzOrBuzz() {
	for (let i = 100; i > 0; i--) {
		if (i % 3 === 0 && i % 5 === 0) {
			const stringArr = []
			for(let j = 1; j < i; j++) {
				stringArr.push('FizzBuzz')
			}
			const anotherarr = stringArr.join(' ')
			console.log(anotherarr);
		} else if (i % 5 === 0) {
			const stringArr = []
			for (let j = 1; j < i; j++) {
				stringArr.push('Buzz')
			}
			const anotherarr = stringArr.join(' ')
			console.log(anotherarr);
		} else if (i % 3 === 0) {
			const stringArr = []
			for (let j = 1; j < i; j++) {
				stringArr.push('Fizz')
			} 
			const anotherarr = stringArr.join(' ')
			console.log(anotherarr);
		} else {
			console.log(i)
		}
	}
}

// PrintFizzOrBuzz();

function validatePIN(pin) {
	const filtered = Array.from(pin).map(i => Number(i))
	console.log(Array.from(pin))
	console.log(filtered)
	// const filtered = Array.from(pin).map(i => Number(i)).includes(NaN)
	if (Array.from(pin).includes(' ') || Array.from(pin).includes('\n')) return false
	if (Array.from(pin).includes('\n')) return false
	if (filtered.includes(NaN)) {
		console.log('Includes NaN: ' + filtered.includes(NaN))
		return false
	} else if (filtered.length === 4 || filtered.length === 6) {
		console.log("Pass filter: " + filtered + ' length: ' + filtered.length)
		return true
	} else {
		console.log("Do not pass filter: " + filtered + ' length: ' + filtered.length)
		return false
	}
}
validatePIN('1234')
validatePIN('123456')
validatePIN('1234567')
validatePIN('-1.234')
validatePIN('-1234')
validatePIN('a1234')
validatePIN('...')
validatePIN('...1')
validatePIN('1')
validatePIN('73 1')

function validatePIN(pin) {
	return /^(\d{4}|\d{6})$/.test(pin)
}

function validatePIN(pin) {

	var pinlen = pin.length;
	var isCorrectLength = (pinlen == 4 || pinlen == 6);
	var hasOnlyNumbers = pin.match(/^\d+$/);

	if (isCorrectLength && hasOnlyNumbers) {
		return true;
	}

	return false;

}