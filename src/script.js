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

PrintFizzOrBuzz();